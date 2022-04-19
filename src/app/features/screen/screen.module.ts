import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreenContainerComponent } from './screen-container/screen-container.component';
import { ScreenListComponent } from './screen-container/screen-list/screen-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [ScreenContainerComponent, ScreenListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ScreenModule { }
