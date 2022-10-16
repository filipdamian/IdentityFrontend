import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { ScreenWrapper } from 'src/app/core/interfaces/ScreenWrapper';
import { ScreenService } from '../services/screen.service';

@Component({
    selector: 'app-screen-container',
    templateUrl: './screen-container.component.html',
    styleUrls: ['./screen-container.component.scss']
})
export class ScreenContainerComponent implements OnInit {

    public screens$: Observable<ScreenWrapper>;

    constructor(
        private readonly _screenService: ScreenService,
        private _route: ActivatedRoute,
        private router: Router) {

    }

    public addScreen() {
        this.router.navigate(["/addScreen"]);
    }


    public deleteScreenEventHandler(screenId: string) {
        this._screenService.deleteScreen(screenId);
        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.screens$ = this._screenService.geScreenById(payload.id);
            return this._screenService.geScreenById(payload.id);
        }))

    }

    public editScreenEventHandler(screen: ScreenWrapper) {
        this.router.navigate(["/editScreen", screen.id]);
    }
    ngOnInit(): void {
        let payload: IdWOTypeScenarioWrapper;
        this._route.params.pipe(take(1), switchMap(params => {
            payload = {
                id: params["id"]
            }
            console.log(payload.id)
            this.screens$ = this._screenService.geScreenById(payload.id);
            return this._screenService.geScreenById(payload.id);

        }))
    }

}
