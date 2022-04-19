import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WOTypeScenarioWrapper } from 'src/app/core/interfaces/WOTypeScenarioWrapper';

@Component({
  selector: 'app-wo-type-scenario-list',
  templateUrl: './wo-type-scenario-list.component.html',
  styleUrls: ['./wo-type-scenario-list.component.scss']
})
export class WoTypeScenarioListComponent implements OnInit {

  @Input()
  public woTypeScenarios: WOTypeScenarioWrapper[];

  @Output()
  public navigateToWOTypeScenarioStepEvent = new EventEmitter<string>();

  @Output()
  public editWOTypeScenarioEvent = new EventEmitter<WOTypeScenarioWrapper>();

  @Output()
  public deleteWOTypeScenarioEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.woTypeScenarios) {
      throw new Error("Parameter woTypeScenarios must be provided!");
    }
  }

}
