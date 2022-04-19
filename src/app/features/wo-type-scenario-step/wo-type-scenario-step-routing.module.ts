import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoTypeScenarioStepContainerComponent } from './wo-type-scenario-step-container/wo-type-scenario-step-container.component';

const routes: Routes = [
  {
    path: '',
    component: WoTypeScenarioStepContainerComponent
  },
  // {
  //     path: ':id',
  //     //component: WoTypeContainerComponent
  // },
  // {
  //     path: 'add',
  //     //component: WoTypeContainerComponent
  // }
  // {
  //     path: 'wotypescenario/:id',
  //     component: WotypescenarioComponent,

  // },
  // {
  //     path: 'wotypescenariostep/:id',
  //     component: WotypescenariostepComponent
  // },
  // {
  //     path: 'screen/:id',
  //     component: ScreenComponent

  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoTypeScenarioStepRoutingModule { }
