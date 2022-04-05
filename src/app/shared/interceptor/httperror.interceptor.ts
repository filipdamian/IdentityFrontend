import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpStatusCode
} from '@angular/common/http';
import { catchError, Observable, of, Subject, Subscription, switchMap, take, throwError } from 'rxjs';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttperrorInterceptor implements HttpInterceptor {

    private readonly _tokenRefreshSubject = new Subject<boolean>();
    private _tokenRefreshSubscription: Subscription = Subscription.EMPTY;

    constructor(private _toastrService: MessageToasterService, private _authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpEventObs$: Observable<HttpEvent<any>>;
        if (request.url.includes(environment.API_URL)) {
            if (request.url.endsWith("refresh-token") === true) {
                httpEventObs$ = next.handle(request);
            } else if (this._tokenRefreshSubscription.closed === false) {
                httpEventObs$ = this.getRequestAfterTokenRefresh(request, next);
            } else {
                httpEventObs$ = next.handle(request).pipe(
                    catchError((error, caught) => {
                        console.log(error.error);
                        if (error instanceof HttpErrorResponse) {
                            if (this.isTokenExpired(error) === true) {
                                return this.getRequestAfterTokenRefresh(request, next);
                            } else {
                                this._toastrService.errorMessage(error.error);

                                return throwError(error);
                            }
                        }
                        return caught;
                    })
                );
            }

            return httpEventObs$;
        }

        return next.handle(request);

    }

    private getRequestAfterTokenRefresh(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.getTokenRefreshSubjectInitializedObs().pipe(
            switchMap(refreshTokenWithSuccess => {
                if (refreshTokenWithSuccess === true) {
                    return next.handle(this._authService.getRequestWithAuthHeader(request));
                }
                return of(null as unknown as HttpEvent<any>);
            })
        )
    }

    private getTokenRefreshSubjectInitializedObs(): Observable<boolean> {
        if (this._tokenRefreshSubscription.closed === true) {
            this._tokenRefreshSubscription = this._authService.refreshToken().pipe(
                take(1),
                catchError(error => {
                    return of(false);
                })
            ).subscribe(refreshTokenWithSuccess => {
                this._tokenRefreshSubscription.unsubscribe();
                this._tokenRefreshSubject.next(refreshTokenWithSuccess)
            })
        }

        return this._tokenRefreshSubject.asObservable();
    }


    private isTokenExpired(error: HttpErrorResponse): boolean {
        return (
            error.status &&
            error.status === HttpStatusCode.Unauthorized,
            error.headers.get("x-token-expired") === "True"
        );
    }
}
