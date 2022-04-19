import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/guards/authguard/authguard.guard';
import { LoginguardGuard } from './core/guards/loginguard/loginguard.guard';
import { AuthenticatedLayoutComponent } from './core/layout/authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from './core/layout/unauthenticated-layout/unauthenticated-layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'features/welcome'
    },
    {
        path: 'features',
        canActivate: [AuthguardGuard], //sa verifice daca user-ul este authenticated
        component: AuthenticatedLayoutComponent,
        children: [
            {
                path: 'welcome',
                loadChildren: () => import('src/app/features/welcome/welcome.module').then(m => m.WelcomeModule)
            },
            {
                path: 'woTypeScenarios',
                loadChildren: () => import('src/app/features/wo-type-scenario/wo-type-scenario.module').then(m => m.WoTypeScenarioModule)
            },
            {
                path: 'woTypeScenarioSteps',
                loadChildren: () => import('src/app/features/wo-type-scenario-step/wo-type-scenario-step.module').then(m => m.WoTypeScenarioStepModule)
            },
            {
                path: 'Screens',
                loadChildren: () => import('src/app/features/screen/screen.module').then(m => m.ScreenModule)
            }
        ]
    },
    {
        path: 'unauthenticated',
        canActivate: [LoginguardGuard], //sa verifice daca user-ul este authenticated
        component: UnauthenticatedLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () => import('src/app/features/modules/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
