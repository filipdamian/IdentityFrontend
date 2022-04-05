import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogForgotPasswordEmailComponent } from './dialog-forgot-password/dialog-forgot-password-email.component';
import { EmailconfirmationComponent } from './emailconfirmation/emailconfirmation.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },

  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/email-confirmation/:confirmationToken',
    component: EmailconfirmationComponent
  },
  {
    path: 'auth/password-recovery',
    component: DialogForgotPasswordEmailComponent
  },
  {
    path: 'auth/forgot-password/:PasswordToken',
    component: PasswordRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
