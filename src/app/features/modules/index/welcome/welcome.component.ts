import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { take } from 'rxjs';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private _toastrService: MessageToasterService, private _router: Router, private jwtHelper: JwtHelperService, private httpClient: HttpClient) { }

  ngOnInit(): void {

  }
  public logOut() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtRefresh");
    this._router.navigate(['/auth/login'])
    this._toastrService.successMessage("User loged out successfully");

  }

  public fakeGet() {
    this.httpClient.get("https://localhost:5001/api/user").pipe(take(1)).subscribe(result => {
      console.log("fake request done!");
    })
    this.httpClient.get("https://localhost:5001/api/user").pipe(take(1)).subscribe(result => {
      console.log("fake request done!");
    })
  }
  public isUserAuthenticated() {
    const token: string | null = localStorage.getItem("jwtToken");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
}
