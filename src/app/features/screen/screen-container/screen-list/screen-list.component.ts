import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenWrapper } from 'src/app/core/interfaces/ScreenWrapper';

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss']
})
export class ScreenListComponent implements OnInit {

  @Input()
  public screens: ScreenWrapper;

  @Output()
  public editScreenEvent = new EventEmitter<ScreenWrapper>();

  @Output()
  public deleteScreenEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    if (!this.screens) {
      throw new Error("Parameter screens must be provided!");
    }
  }

}
