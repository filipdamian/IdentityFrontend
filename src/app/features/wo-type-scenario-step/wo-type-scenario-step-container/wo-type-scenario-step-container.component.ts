import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { WOTypeScenarioStepWrapper } from 'src/app/core/interfaces/WOTypeScenarioStepWrapper';
import { WoTypeScenarioStepService } from '../services/wo-type-scenario-step.service';

@Component({
    selector: 'app-wo-type-scenario-step-container',
    templateUrl: './wo-type-scenario-step-container.component.html',
    styleUrls: ['./wo-type-scenario-step-container.component.scss']
})
export class WoTypeScenarioStepContainerComponent implements OnInit {

    public woTypeScenarioSteps$: Observable<WOTypeScenarioStepWrapper[]>
    constructor(
        private readonly _woTypeScenarioStepService: WoTypeScenarioStepService,
        private _route: ActivatedRoute, private router: Router) {

    }

    public addWOTypeScenarioStep() {
        this.router.navigate(["/addWOTypeScenarioStep"]);
    }

    public navigateToScreenEvent(woTypeScenarioId: string) {
        this.router.navigate(["/screen", woTypeScenarioId]);
    }

    public deleteWOTypeScenarioStepEventHandler(woTypeScenarioId: string) {
        this._woTypeScenarioStepService.deleteWOTypeScenarioStep(woTypeScenarioId);
        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.woTypeScenarioSteps$ = this._woTypeScenarioStepService.getWOTypeScenarioStepsById(payload.id);
            return this._woTypeScenarioStepService.getWOTypeScenarioStepsById(payload.id);
        }))

    }

    public editWOTypeScenarioStepEventHandler(woTypeScenario: WOTypeScenarioStepWrapper) {
        this.router.navigate(["/editWOTypeScenarioStep", woTypeScenario.id]);
    }
    ngOnInit(): void {

        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.woTypeScenarioSteps$ = this._woTypeScenarioStepService.getWOTypeScenarioStepsById(payload.id);
            return this._woTypeScenarioStepService.getWOTypeScenarioStepsById(payload.id);
        }))
    }

}