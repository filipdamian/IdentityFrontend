import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { IdWOTypeScenarioWrapper } from 'src/app/core/interfaces/IdWOTypeScenarioWrapper';
import { WOTypeWrapper } from 'src/app/core/interfaces/WOTypeWrapper';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
import { WOTypeService } from '../services/wo-types.service';

@Component({
  selector: 'app-edit-wo-type',
  templateUrl: './edit-wo-type.component.html',
  styleUrls: ['./edit-wo-type.component.scss']
})
export class EditWoTypeComponent implements OnInit {


  public WOTypeForm: FormGroup = new FormGroup({
    WOTypeCode: new FormControl(),
    WOTypeName: new FormControl(),
    DurationMinutes: new FormControl(),
  });
  constructor(private readonly _woTypeService: WOTypeService,
    private _route: ActivatedRoute, private readonly router: Router,
    private readonly _toastrService: MessageToasterService) { }

  //getters 
  get WOTypeId(): FormControl {
    return this.WOTypeForm.get('WOTypeId') as FormControl;
  }
  get WOTypeCode(): FormControl {
    return this.WOTypeForm.get('WOTypeCode') as FormControl;
  }
  get WOTypeName(): FormControl {
    return this.WOTypeForm.get('WOTypeName') as FormControl;
  }
  get DurationMinutes(): FormControl {
    return this.WOTypeForm.get('DurationMinutes') as FormControl;
  }
  ngOnInit(): void {


  }
  public editWotype() {
    console.log("salut")
    let payload: IdWOTypeScenarioWrapper;
    this._route.params
      .pipe(
        take(1),
        switchMap(params => {
          payload = {
            id: params["id"]
          }
          console.log(payload.id)
          return this._woTypeService.updateWOType(this.WOTypeForm.value, payload.id)
        })
      ).subscribe((response => {
        if (response != null) {
          this._toastrService.successMessage("WoType successfully edited");
          this.router.navigate(["/features/woType"]);

        }
      }))
  }
}

