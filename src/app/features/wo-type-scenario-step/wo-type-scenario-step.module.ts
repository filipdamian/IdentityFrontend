import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WoTypeScenarioStepContainerComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-container.component';
import { WoTypeScenarioStepListComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-list/wo-type-scenario-step-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [WoTypeScenarioStepContainerComponent, WoTypeScenarioStepListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class WoTypeScenarioStepModule { }
