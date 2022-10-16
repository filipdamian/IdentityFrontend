import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss']
})
export class AddScreenComponent implements OnInit {

  public screenForm: FormGroup = new FormGroup({
    screenCode: new FormControl(),
    screenName: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    description: new FormControl(),

  });
  constructor(private readonly _screenService: ScreenService) { }

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
  public addScreen() {
    this._screenService.createScreen(this.screenForm.value);
  }
}
