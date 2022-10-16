import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { WoTypeScenarioStepService } from '../services/wo-type-scenario-step.service';

@Component({
  selector: 'app-add-wo-type-scenario-step',
  templateUrl: './add-wo-type-scenario-step.component.html',
  styleUrls: ['./add-wo-type-scenario-step.component.scss']
})
export class AddWoTypeScenarioStepComponent implements OnInit {

  public WOTypeScenarioStepForm: FormGroup = new FormGroup({
    stepNumber: new FormControl(),
    stepName: new FormControl(),
    screenCode: new FormControl(),
    woScenarioId: new FormControl(),
    screenId: new FormControl(),
  });
  constructor(private readonly _woTypeScenarioStepService: WoTypeScenarioStepService) { }

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
  public addWotypeScenarioStep() {
    this._woTypeScenarioStepService.createWOTypeScenarioStep(this.WOTypeScenarioStepForm.value);
  }
}
