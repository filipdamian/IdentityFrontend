import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from './layout/unauthenticated-layout/unauthenticated-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SideNavComponent,
        AuthenticatedLayoutComponent,
        UnauthenticatedLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ]
})
export class CoreModule { }
