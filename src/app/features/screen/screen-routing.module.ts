import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import { ScreenContainerComponent } from './screen-container/screen-container.component';

const routes: Routes = [
    {
        path: '',
        component: ScreenContainerComponent
    },
    {
        path: 'addScreen',
        component: AddScreenComponent
    },
    {
        path: 'editScreen/:id',
        component: EditScreenComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScreenRoutingModule { }
