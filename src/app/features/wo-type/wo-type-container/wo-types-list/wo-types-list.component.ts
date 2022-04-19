import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WOTypeWrapper } from 'src/app/core/interfaces/WOTypeWrapper';

@Component({
    selector: 'app-wo-types-list',
    templateUrl: './wo-types-list.component.html',
    styleUrls: ['./wo-types-list.component.scss']
})
export class WoTypesListComponent implements OnInit {

    @Input()
    public woTypes: WOTypeWrapper[];

    @Output()
    public navigateToWOTypeScenarioEvent = new EventEmitter<string>();

    @Output()
    public editWOTypeEvent = new EventEmitter<WOTypeWrapper>();

    @Output()
    public deleteWOTypeEvent = new EventEmitter<string>();


    constructor() { }

    ngOnInit(): void {
        if (!this.woTypes) {
            throw new Error("Parameter woTypes must be provided!");
        }
    }

}
