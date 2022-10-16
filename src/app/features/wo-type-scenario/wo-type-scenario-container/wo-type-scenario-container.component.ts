import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { WOTypeScenarioWrapper } from 'src/app/core/interfaces/WOTypeScenarioWrapper';
import { WoTypeScenarioService } from '../services/wo-type-scenario.service';

@Component({
    selector: 'app-wo-type-scenario-container',
    templateUrl: './wo-type-scenario-container.component.html',
    styleUrls: ['./wo-type-scenario-container.component.scss']
})
export class WoTypeScenarioContainerComponent implements OnInit {

    public woTypeScenarios$: Observable<WOTypeScenarioWrapper[]>
    constructor(
        private readonly _woTypeScenarioService: WoTypeScenarioService,
        private _route: ActivatedRoute,
        private router: Router) {

    }

    public addWOTypeScenario() {

        this.router.navigate(['addWOTypeScenario'], { relativeTo: this._route });
    }

    public navigateToWOTypeScenarioStepEvent(woTypeScenarioId: string) {
        this.router.navigate(["/woTypeScenarioSteps", woTypeScenarioId]);
    }

    public deleteWOTypeScenarioEventHandler(woTypeScenarioId: string) {
        this._woTypeScenarioService.deleteWOTypeScenario(woTypeScenarioId);
        //getbyid 
        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.woTypeScenarios$ = this._woTypeScenarioService.getWOTypeScenariosById(payload.id);
            return this._woTypeScenarioService.getWOTypeScenariosById(payload.id);
        }))
    }

    public editWOTypeScenarioEventHandler(woTypeScenario: WOTypeScenarioWrapper) {
        this.router.navigate(["/editWOTypeScenario", woTypeScenario.id]);
    }
    ngOnInit(): void {

        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.woTypeScenarios$ = this._woTypeScenarioService.getWOTypeScenariosById(payload.id);
            return this._woTypeScenarioService.getWOTypeScenariosById(payload.id);
        })).subscribe(resposne => { })
    }

}
