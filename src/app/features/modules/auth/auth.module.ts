import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailconfirmationComponent } from './emailconfirmation/emailconfirmation.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DialogForgotPasswordEmailComponent } from './dialog-forgot-password/dialog-forgot-password-email.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmailconfirmationComponent,
    DialogForgotPasswordEmailComponent,
    PasswordRecoveryComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
