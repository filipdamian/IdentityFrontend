import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoTypeScenarioStepContainerComponent } from '../wo-type-scenario-step/wo-type-scenario-step-container/wo-type-scenario-step-container.component';
import { AddWoTypeScenarioComponent } from './add-wo-type-scenario/add-wo-type-scenario.component';
import { EditWoTypeScenarioComponent } from './edit-wo-type-scenario/edit-wo-type-scenario.component';
import { WoTypeScenarioContainerComponent } from './wo-type-scenario-container/wo-type-scenario-container.component';

const routes: Routes = [
  {
    path: '',
    component: WoTypeScenarioContainerComponent
  },
  {
    path: 'addWOTypeScenario',
    component: AddWoTypeScenarioComponent
  },
  {
    path: 'editWOTypeScenario/:id',
    component: EditWoTypeScenarioComponent
  },
  {
    path: 'woTypeScenarioSteps/:id',
    component: WoTypeScenarioStepContainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoTypeScenarioRoutingModule { }
