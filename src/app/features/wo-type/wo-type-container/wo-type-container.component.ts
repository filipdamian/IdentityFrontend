import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WOTypeWrapper } from 'src/app/core/interfaces/WOTypeWrapper';
import { WOTypeService } from '../services/wo-types.service';

@Component({
    selector: 'app-wo-type-container',
    templateUrl: './wo-type-container.component.html',
    styleUrls: ['./wo-type-container.component.scss']
})
export class WoTypeContainerComponent implements OnInit {


    public woTypes$: Observable<WOTypeWrapper[]>;

    constructor(private readonly _woTypeService: WOTypeService) {

    }

    public addWOType() {

    }

    public navigateToWOTypeScenarioEvent(woTypeId: string) {

    }

    public deleteWOTypeEventHandler(woTypeId: string) {

    }

    public editWOTypeEventHandler(woType: WOTypeWrapper) {

    }

    ngOnInit(): void {
        this.woTypes$ = this._woTypeService.getAllWOTypes();
    }

}
