import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.scss']
})
export class EditScreenComponent implements OnInit {
  public screenForm: FormGroup = new FormGroup({
    screenCode: new FormControl(),
    screenName: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    description: new FormControl(),

  });
  constructor(private readonly _screenService: ScreenService, private _route: ActivatedRoute) { }

  //getters 
  get screenCode(): AbstractControl {
    return this.screenForm.get('screenCode') as FormGroup;
  }
  get screenName(): AbstractControl {
    return this.screenForm.get('screenName') as FormGroup;
  }
  get start(): AbstractControl {
    return this.screenForm.get('start') as FormGroup;
  }
  get end(): AbstractControl {
    return this.screenForm.get('end') as FormGroup;
  }
  get description(): AbstractControl {
    return this.screenForm.get('description') as FormGroup;
  }
  ngOnInit(): void {

  }
  public editScreen() {

    let payload: IdWOTypeScenarioWrapper;
    this._route.params
      .pipe(
        take(1),
        switchMap(params => {
          payload = {
            id: params["id"]
          }
          return this._screenService.updateScreen(this.screenForm.value, payload);
        })
      )
  }
}
