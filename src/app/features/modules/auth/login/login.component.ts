import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
import { environment } from 'src/environments/environment';
import { DialogForgotPasswordEmailComponent } from '../dialog-forgot-password/dialog-forgot-password-email.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup = new FormGroup({
		uniqueIdentifier: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(
		private router: Router,
		private _authService: AuthService,
		public dialog: MatDialog,
		private _toastrService: MessageToasterService) {

	}

	//getters
	get uniqueIdentifier(): AbstractControl {
		return this.loginForm.get('email') as FormGroup;
	}

	get password(): AbstractControl {
		return this.loginForm.get('password') as FormGroup;
	}

	ngOnInit(): void {
		localStorage.removeItem("jwtToken");
		localStorage.removeItem("jwtRefresh");
	}

	public login(): void {
		console.log(this.loginForm.value);
		this._authService.loginPostRequest(this.loginForm.value).subscribe(response => {
			localStorage.setItem("jwtToken", response.token);
			localStorage.setItem("jwtRefresh", response.refreshToken);
			this.router.navigate(["features/welcome"]);
			this._toastrService.successMessage("Loged in successfully");
		});


	}
	public register(): void {
		this.router.navigate(['/auth/register']);

	}
	public forgotpassword(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '950px';
		dialogConfig.height = '700px';
		this.dialog.open(DialogForgotPasswordEmailComponent, dialogConfig);

	}
}
