import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private readonly _woTypeScenarioService: WoTypeScenarioService, private _route: ActivatedRoute) { }

  public addWOTypeScenario() {

  }

  public navigateToWOTypeScenarioStepEvent(woTypeScenarioId: string) {

  }

  public deleteWOTypeScenarioEventHandler(woTypeScenarioId: string) {

  }

  public editWOTypeScenarioEventHandler(woTypeScenario: WOTypeScenarioWrapper) {

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
    }))
  }

}
