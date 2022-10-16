import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenContainerComponent } from '../screen/screen-container/screen-container.component';
import { AddWoTypeScenarioStepComponent } from './add-wo-type-scenario-step/add-wo-type-scenario-step.component';
import { EditWoTypeScenarioStepComponent } from './edit-wo-type-scenario-step/edit-wo-type-scenario-step.component';
import { WoTypeScenarioStepContainerComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-container.component';

const routes: Routes = [
  {
    path: '',
    component: WoTypeScenarioStepContainerComponent
  },
  {
    path: 'addWOTypeScenarioStep',
    component: AddWoTypeScenarioStepComponent
  },
  {
    path: 'editWOTypeScenarioStep/:id',
    component: EditWoTypeScenarioStepComponent
  },
  {
    path: 'screen/:id',
    component: ScreenContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoTypeScenarioStepRoutingModule { }
