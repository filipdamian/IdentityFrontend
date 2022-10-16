import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { WoTypeScenarioStepService } from '../services/wo-type-scenario-step.service';

@Component({
  selector: 'app-edit-wo-type-scenario-step',
  templateUrl: './edit-wo-type-scenario-step.component.html',
  styleUrls: ['./edit-wo-type-scenario-step.component.scss']
})
export class EditWoTypeScenarioStepComponent implements OnInit {

  public WOTypeScenarioStepForm: FormGroup = new FormGroup({
    stepNumber: new FormControl(),
    stepName: new FormControl(),
    screenCode: new FormControl(),
    woScenarioId: new FormControl(),
    screenId: new FormControl(),
  });
  constructor(private readonly _woTypeScenarioStepService: WoTypeScenarioStepService, private readonly _route: ActivatedRoute) { }

  //getters 
  get stepNumber(): AbstractControl {
    return this.WOTypeScenarioStepForm.get('stepNumber') as FormGroup;
  }
  get stepName(): AbstractControl {
    return this.WOTypeScenarioStepForm.get('stepName') as FormGroup;
  }
  get screenCode(): AbstractControl {
    return this.WOTypeScenarioStepForm.get('screenCode') as FormGroup;
  }
  get woScenarioId(): AbstractControl {
    return this.WOTypeScenarioStepForm.get('woScenarioId') as FormGroup;
  }
  get screenId(): AbstractControl {
    return this.WOTypeScenarioStepForm.get('screenId') as FormGroup;
  }
  ngOnInit(): void {

  }
  public editWotypeScenarioStep() {
    let payload: IdWOTypeScenarioWrapper;
    this._route.params
      .pipe(
        take(1),
        switchMap(params => {
          payload = {
            id: params["id"]
          }
          return this._woTypeScenarioStepService.updateWOTypeScenarioStep(this.WOTypeScenarioStepForm.value, payload);
        })
      )
  }
}
