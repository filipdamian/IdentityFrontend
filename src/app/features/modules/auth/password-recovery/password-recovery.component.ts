import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { UpdateUserPasswordCommand } from 'src/app/core/interfaces/UpdateUserPasswordCommand';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(private _authService: AuthService,
    private _route: ActivatedRoute, private router: Router, private _toastrService: MessageToasterService) { }
  public recoveryForm: FormGroup = new FormGroup({
    NewPassword: new FormControl(''),
    ConfirmedNewPassword: new FormControl(''),
  });

  //getters
  get NewPassword(): AbstractControl {
    return this.recoveryForm.get('email') as FormGroup;
  }
  get ConfirmedNewPassword(): AbstractControl {
    return this.recoveryForm.get('password') as FormGroup;
  }
  ngOnInit(): void {
  }
  changePassword(): void {
    console.log(this.recoveryForm.value.NewPassword)
    let payload: UpdateUserPasswordCommand;
    this._route.params.pipe(
      take(1),
      switchMap(params => {
        payload = {
          PasswordToken: params["PasswordToken"],
          NewPassword: this.recoveryForm.value.NewPassword,
          ConfirmedNewPassword: this.recoveryForm.value.ConfirmedNewPassword
        }
        console.log(payload);

        return this._authService.updateUserPassword(payload);

      })
    ).subscribe((passwordRecoveryResponse: boolean) => {
      if (passwordRecoveryResponse === true) {
        this._toastrService.successMessage("Password successfully changed!")
        this.router.navigate(["/auth/login"]);
        console.log("ceva")
      }
    })

  }
}
