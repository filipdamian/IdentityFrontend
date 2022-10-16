import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public ceva: WOTypeWrapper[]

    constructor(
        private readonly _woTypeService: WOTypeService,
        private readonly router: Router,
        private readonly activatedRouted: ActivatedRoute) {
    }

    public addWOType() {
        this.router.navigate(['add'], { relativeTo: this.activatedRouted });
    }

    public navigateToWOTypeScenarioEvent(woTypeId: string) {
        this.router.navigate(["/woTypeScenarios", woTypeId]);

    }

    public deleteWOTypeEventHandler(woTypeId: string) {

        this._woTypeService.deleteWOType(woTypeId).subscribe(response => {
            if (response === true) {
                this.woTypes$ = this._woTypeService.getAllWOTypes();
            }
        });
    }

    public editWOTypeEventHandler(woType: WOTypeWrapper) {

        this.router.navigate(['edit', woType.id], { relativeTo: this.activatedRouted });
    }

    ngOnInit(): void {
        this.woTypes$ = this._woTypeService.getAllWOTypes();
    }

}
