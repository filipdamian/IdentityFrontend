import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WoTypeScenarioStepContainerComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-container.component';
import { WoTypeScenarioStepListComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-list/wo-type-scenario-step-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddWoTypeScenarioStepComponent } from './add-wo-type-scenario-step/add-wo-type-scenario-step.component';
import { EditWoTypeScenarioStepComponent } from './edit-wo-type-scenario-step/edit-wo-type-scenario-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WoTypeScenarioStepRoutingModule } from './wo-type-scenario-step-routing.module';
import { WoTypeScenarioStepServiceModuleModule } from './services/wo-type-scenario-step-service-module.module';


@NgModule({
  declarations: [WoTypeScenarioStepContainerComponent, WoTypeScenarioStepListComponent, AddWoTypeScenarioStepComponent, EditWoTypeScenarioStepComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    WoTypeScenarioStepRoutingModule,
    WoTypeScenarioStepServiceModuleModule
  ]
})
export class WoTypeScenarioStepModule { }
