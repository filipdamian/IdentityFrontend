import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private jwtHelper: JwtHelperService) { }
  canActivate(
  ): boolean {
    const token = localStorage.getItem("jwtToken");
    if ((token != null && this.jwtHelper.isTokenExpired(token) === true) || token == null) {

      return true;
    }
    this.router.navigate(["/welcome"]);
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
