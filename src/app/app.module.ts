import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { HttperrorInterceptor } from './shared/interceptor/httperror.interceptor';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';


export function tokenGetter() {
    return localStorage.getItem("jwtToken");
}


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
        MatSortModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ["localhost:5001"],
                blacklistedRoutes: []
            }
        }),
        NgbModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttperrorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent],
})
export class AppModule { }
