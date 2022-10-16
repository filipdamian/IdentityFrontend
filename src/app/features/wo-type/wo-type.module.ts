import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoTypeContainerComponent } from './wo-type-container/wo-type-container.component';
import { WoTypesListComponent } from './wo-type-container/wo-types-list/wo-types-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { WoTypeRoutingModule } from './wo-type-routing.module';
import { AddWoTypeComponent } from './add-wo-type/add-wo-type.component';
import { EditWoTypeComponent } from './edit-wo-type/edit-wo-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WoTypeServicesModule } from './services/wo-type-services.module';


@NgModule({
    declarations: [
        WoTypeContainerComponent,
        WoTypesListComponent,
        AddWoTypeComponent,
        EditWoTypeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        WoTypeServicesModule,
        WoTypeRoutingModule
    ]
})
export class WoTypeModule { }
