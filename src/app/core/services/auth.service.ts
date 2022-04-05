import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { EmailConfirmationCommand } from '../interfaces/EmailConfirmationCommand';
import { environment } from 'src/environments/environment';
import { TokenWrapper } from '../interfaces/TokenWrapper';
import { LoginCommand } from '../interfaces/LoginCommand';
import { RegisterCommand } from '../interfaces/RegisterCommand';
import { RecoveryPasswordEmailCommand } from '../interfaces/RecoveryPasswordEmailCommand';
import { UpdateUserPasswordCommand } from '../interfaces/UpdateUserPasswordCommand';
import { RefreshTokenCommand } from '../interfaces/RefreshTokenCommand';
import { Router } from '@angular/router';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    observe: 'response' as 'response'
};

@Injectable({
    providedIn: 'root'
})

export class AuthService {


    private url = environment.API_URL;
    constructor(public readonly _http: HttpClient, private readonly _router: Router) { }

    public confirmEmailAddress(emailconfirmationCommand: EmailConfirmationCommand): Observable<boolean> {
        return this._http.post<boolean>(this.url + '/Account/email-confirm', emailconfirmationCommand);
    }
    public loginPostRequest(user: LoginCommand) {
        return this._http.post<TokenWrapper>(this.url + "/account/login", user);

    }
    public registerPostRequset(user: RegisterCommand) {
        return this._http.post<boolean>(this.url + "/Account/register", user);
    }
    public recoveryPasswordEmail(recoveryPasswordEmailCommand: RecoveryPasswordEmailCommand) {
        return this._http.post<boolean>(this.url + '/Account/forgot-password', recoveryPasswordEmailCommand);
    }
    public updateUserPassword(updateUserPasswordCommand: UpdateUserPasswordCommand) {
        return this._http.post<boolean>(this.url + '/Account/password-recovery', updateUserPasswordCommand);
    }
    public refreshToken() {
        const token = localStorage.getItem("jwtToken");
        const refreshToken = localStorage.getItem("jwtRefresh");

        let payload: RefreshTokenCommand;

        payload = {
            LoginToken: token,
            RefreshLoginToken: refreshToken
        }
        return this._http.post<TokenWrapper>(this.url + '/Account/refresh-token', payload).pipe(
            take(1),
            map(response => {
                if (response.refreshToken === null && response.token === null) {
                    this._router.navigate(["/auth/login"]);
                    localStorage.removeItem("jwtToken");
                    localStorage.removeItem("jwtRefresh");
                    return false;
                }
                localStorage.setItem("jwtToken", response.token);
                localStorage.setItem("jwtRefresh", response.refreshToken);
                return true;
            })
        );;
    }

    public getRequestWithAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const authHeader = `Bearer ${token}`
            return request.clone({
                headers: request.headers.set("Authorization", authHeader)
            })
        }

        return request;
    }
}
