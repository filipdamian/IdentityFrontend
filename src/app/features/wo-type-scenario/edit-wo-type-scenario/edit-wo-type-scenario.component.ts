import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { WoTypeScenarioService } from '../services/wo-type-scenario.service';

@Component({
  selector: 'app-edit-wo-type-scenario',
  templateUrl: './edit-wo-type-scenario.component.html',
  styleUrls: ['./edit-wo-type-scenario.component.scss']
})
export class EditWoTypeScenarioComponent implements OnInit {

  public WOTypeScenarioForm: FormGroup = new FormGroup({
    scenarioCode: new FormControl(),
    scenarioName: new FormControl(),
    state: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private readonly _woTypeScenarioService: WoTypeScenarioService, private _route: ActivatedRoute) { }

  //getters 
  get scenarioCode(): AbstractControl {
    return this.WOTypeScenarioForm.get('scenarioCode') as FormGroup;
  }
  get scenarioName(): AbstractControl {
    return this.WOTypeScenarioForm.get('scenarioName') as FormGroup;
  }
  get state(): AbstractControl {
    return this.WOTypeScenarioForm.get('state') as FormGroup;
  }
  get start(): AbstractControl {
    return this.WOTypeScenarioForm.get('start') as FormGroup;
  }
  get end(): AbstractControl {
    return this.WOTypeScenarioForm.get('end') as FormGroup;
  }
  ngOnInit(): void {

  }
  public editWotypeScenario() {

    let payload: IdWOTypeScenarioWrapper;
    this._route.params
      .pipe(
        take(1),
        switchMap(params => {
          payload = {
            id: params["id"]
          }
          return this._woTypeScenarioService.updateWOTypeScenario(this.WOTypeScenarioForm.value, payload);
        })
      )
  }
}
