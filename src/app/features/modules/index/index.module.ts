import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent
    
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],

})
export class IndexModule { }
