import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WOTypeScenarioStepWrapper } from 'src/app/core/interfaces/WOTypeScenarioStepWrapper';

@Component({
  selector: 'app-wo-type-scenario-step-list',
  templateUrl: './wo-type-scenario-step-list.component.html',
  styleUrls: ['./wo-type-scenario-step-list.component.scss']
})
export class WoTypeScenarioStepListComponent implements OnInit {

  @Input()
  public woTypeScenarioSteps: WOTypeScenarioStepWrapper[];

  @Output()
  public navigateToScreenEvent = new EventEmitter<string>();

  @Output()
  public editWOTypeScenarioStepEvent = new EventEmitter<WOTypeScenarioStepWrapper>();

  @Output()
  public deleteWOTypeScenarioStepEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.woTypeScenarioSteps) {
      throw new Error("Parameter woTypeScenarioSteps must be provided!");
    }
  }

}
