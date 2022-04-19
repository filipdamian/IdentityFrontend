import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoTypeScenarioContainerComponent } from './wo-type-scenario-container/wo-type-scenario-container.component';

const routes: Routes = [
  {
    path: '',
    component: WoTypeScenarioContainerComponent
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
export class WoTypeScenarioRoutingModule { }
