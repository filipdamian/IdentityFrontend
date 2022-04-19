import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoTypeContainerComponent } from './wo-type-container/wo-type-container.component';

const routes: Routes = [
    {
        path: '',
        component: WoTypeContainerComponent
    },
    {
        path: ':id',
        //component: WoTypeContainerComponent
    },
    {
        path: 'add',
        //component: WoTypeContainerComponent
    }
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
export class WoTypeRoutingModule { }
