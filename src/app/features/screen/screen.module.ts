import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreenContainerComponent } from './screen-container/screen-container.component';
import { ScreenListComponent } from './screen-container/screen-list/screen-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ScreenContainerComponent, ScreenListComponent, AddScreenComponent, EditScreenComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        ScreenRoutingModule
    ]
})
export class ScreenModule { }
