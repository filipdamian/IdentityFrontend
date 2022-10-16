import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WoTypeScenarioRoutingModule } from './wo-type-scenario-routing.module';
import { WoTypeScenarioContainerComponent } from './wo-type-scenario-container/wo-type-scenario-container.component';
import { WoTypeScenarioListComponent } from './wo-type-scenario-container/wo-type-scenario-list/wo-type-scenario-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddWoTypeScenarioComponent } from './add-wo-type-scenario/add-wo-type-scenario.component';
import { EditWoTypeScenarioComponent } from './edit-wo-type-scenario/edit-wo-type-scenario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WoTypeScenarioServiceModuleModule } from './services/wo-type-scenario-service-module.module';


@NgModule({
  declarations: [WoTypeScenarioContainerComponent, WoTypeScenarioListComponent, AddWoTypeScenarioComponent, EditWoTypeScenarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    WoTypeScenarioRoutingModule,
    WoTypeScenarioServiceModuleModule
  ]
})
export class WoTypeScenarioModule { }
