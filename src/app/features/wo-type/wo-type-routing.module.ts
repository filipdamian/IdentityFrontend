import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWoTypeComponent } from './add-wo-type/add-wo-type.component';
import { EditWoTypeComponent } from './edit-wo-type/edit-wo-type.component';
import { WoTypeContainerComponent } from './wo-type-container/wo-type-container.component';

const routes: Routes = [
    {
        path: '',
        component: WoTypeContainerComponent
    },
    {
        path: 'add',
        component: AddWoTypeComponent
    },
    {
        path: 'edit/:id',
        component: EditWoTypeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WoTypeRoutingModule { }
