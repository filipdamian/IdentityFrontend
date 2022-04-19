import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoTypeContainerComponent } from './wo-type-container/wo-type-container.component';
import { WoTypesListComponent } from './wo-type-container/wo-types-list/wo-types-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    WoTypeContainerComponent,
    WoTypesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class WoTypeModule { }
