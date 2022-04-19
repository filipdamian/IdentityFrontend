import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WoTypeScenarioRoutingModule } from './wo-type-scenario-routing.module';
import { WoTypeScenarioContainerComponent } from './wo-type-scenario-container/wo-type-scenario-container.component';
import { WoTypeScenarioListComponent } from './wo-type-scenario-container/wo-type-scenario-list/wo-type-scenario-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [WoTypeScenarioContainerComponent, WoTypeScenarioListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class WoTypeScenarioModule { }
