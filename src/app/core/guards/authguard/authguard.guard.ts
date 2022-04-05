import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable, of, take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanLoad {
    constructor(private router: Router, private jwtHelper: JwtHelperService, private _authService: AuthService) {

    }
    canActivate(): Observable<boolean> {
        const token = localStorage.getItem("jwtToken");
        const refreshToken = localStorage.getItem("jwtRefresh");
        if (!token || !refreshToken) {
            return of(false);
        }
        if (this.jwtHelper.isTokenExpired(token) === false) {
            console.log("siii");
            return of(true);
        }

        return of(false);
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }

}


