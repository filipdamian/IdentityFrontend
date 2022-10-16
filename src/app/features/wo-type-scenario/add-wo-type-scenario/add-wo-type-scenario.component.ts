import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
import { WoTypeScenarioService } from '../services/wo-type-scenario.service';

@Component({
  selector: 'app-add-wo-type-scenario',
  templateUrl: './add-wo-type-scenario.component.html',
  styleUrls: ['./add-wo-type-scenario.component.scss']
})
export class AddWoTypeScenarioComponent implements OnInit {

  public WOTypeScenarioForm: FormGroup = new FormGroup({

    scenarioCode: new FormControl(),
    scenarioName: new FormControl(),
    state: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private readonly _woTypeScenarioService: WoTypeScenarioService, private readonly router: Router,
    private readonly _toastrService: MessageToasterService, private readonly _route: ActivatedRoute) { }

  //getters 
  get scenarioCode(): FormControl {
    return this.WOTypeScenarioForm.get('scenarioCode') as FormControl;
  }
  get scenarioName(): FormControl {
    return this.WOTypeScenarioForm.get('scenarioName') as FormControl;
  }
  get state(): FormControl {
    return this.WOTypeScenarioForm.get('state') as FormControl;
  }
  get start(): FormControl {
    return this.WOTypeScenarioForm.get('start') as FormControl;
  }
  get end(): FormControl {
    return this.WOTypeScenarioForm.get('end') as FormControl;
  }
  ngOnInit(): void {

  }
  public addWotypeScenario() {
    if (this.WOTypeScenarioForm.valid === true) {
      let payload: IdWOTypeScenarioWrapper;
      this._route.params
        .pipe(
          take(1),
          switchMap(params => {
            payload = {
              id: params["id"]
            }
            console.log(payload.id)

            return null;
          })
        ).subscribe((response => {

        }))
      console.log(this.WOTypeScenarioForm.value['woTypeId'] = payload.id)
      this._woTypeScenarioService.createWOTypeScenario(this.WOTypeScenarioForm.value).subscribe(response => {
        if (response === true) {
          this._toastrService.successMessage("WoTypeScenario successfully added");
          this.router.navigate(["/features/woTypeScenario"]);
        }
      });
    }

  }
}
