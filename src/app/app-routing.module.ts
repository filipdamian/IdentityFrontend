import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/guards/authguard/authguard.guard';
import { LoginguardGuard } from './core/guards/loginguard/loginguard.guard';
import { WelcomeComponent } from './features/modules/index/welcome/welcome.component';

const routes: Routes = [
    //doua path uri -- una normala care duce din localhost in homepage si una cu auth + alternativa daca nu esti auth
    // {
    //     path: '',
    //     loadChildren: () => import('src/app/features/modules/index/index.module').then(m => m.IndexModule),
    // },
    {
        path: '',
        loadChildren: () => import('src/app/features/modules/auth/auth.module').then(m => m.AuthModule),
        canActivate: [LoginguardGuard]
        //auth invers sa nu fie autentificat ca sa nu poate accesa resursa de la login din welcome
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [AuthguardGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
