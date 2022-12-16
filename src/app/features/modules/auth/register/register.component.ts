import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	public registerForm: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
		phoneNumber: new FormControl(''),
		phoneNumberCountryPrefix: new FormControl('')
	})
	constructor(private _toastrService: MessageToasterService, private router: Router,
		private _authService: AuthService) { }

	//getters
	get firstName(): AbstractControl {
		return this.registerForm.get('firstName') as FormGroup;
	}
	get lastName(): AbstractControl {
		return this.registerForm.get('lastName') as FormGroup;
	}
	get email(): AbstractControl {
		return this.registerForm.get('email') as FormGroup;
	}
	get password(): AbstractControl {
		return this.registerForm.get('empasswordail') as FormGroup;
	}
	get phoneNumber(): AbstractControl {
		return this.registerForm.get('phoneNumber') as FormGroup;
	}
	get phoneNumberCountryPrefix(): AbstractControl {
		return this.registerForm.get('phoneNumberCountryPrefix') as FormGroup;
	}


	ngOnInit(): void {
	}
	public redirectLogin(): void {
		this.router.navigate(['/unauthenticated/auth/login']);
	}
	public createAccount(): void {
		console.log(this.registerForm.value);
		this._authService.registerPostRequset(this.registerForm.value)
			.subscribe((response: boolean) => {
				if (response === true) {
					this.router.navigate(["/unauthenticated/auth/login"])
					this._toastrService.successMessage("User registered");
					this._toastrService.successMessage("Email Confirmation Sent");
					this._toastrService.warningMessage("Please confirm Email");
				}
			});

	}
}
