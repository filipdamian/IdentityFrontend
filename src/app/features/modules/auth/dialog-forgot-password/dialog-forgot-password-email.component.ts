import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';

@Component({
  selector: 'app-dialog-forgot-password-email',
  templateUrl: './dialog-forgot-password-email.component.html',
  styleUrls: ['./dialog-forgot-password-email.component.scss']
})
export class DialogForgotPasswordEmailComponent implements OnInit {

  public emailForm = new FormGroup({
    email: new FormControl('')
  })
  constructor(private _authService: AuthService, private router: Router, private _toastrService: MessageToasterService) { }
  //getters
  get email(): AbstractControl {
    return this.emailForm.get('email') as FormGroup;
  }
  ngOnInit(): void {
  }
  send(): void {
    this._authService.recoveryPasswordEmail(this.emailForm.value).subscribe(response => {
      console.log(this.emailForm.value);
      window.location.reload();
      //this.router.navigate(["/auth/login"]);
      this._toastrService.successMessage("Successfully sent email for password recovery");

    })
  }

}
