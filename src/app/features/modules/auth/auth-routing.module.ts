import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogForgotPasswordEmailComponent } from './dialog-forgot-password/dialog-forgot-password-email.component';
import { EmailconfirmationComponent } from './emailconfirmation/emailconfirmation.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'email-confirmation/:confirmationToken',
    component: EmailconfirmationComponent
  },
  {
    path: 'password-recovery',
    component: DialogForgotPasswordEmailComponent
  },
  {
    path: 'forgot-password/:PasswordToken',
    component: PasswordRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
