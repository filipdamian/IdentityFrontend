import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WOTypeService } from 'src/app/core/services/wotype.service';
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-addor-edit-wotype',
  templateUrl: './addor-edit-wotype.component.html',
  styleUrls: ['./addor-edit-wotype.component.scss']
})
export class AddorEditWOTypeComponent implements OnInit {

  public WOTypeForm: FormGroup = new FormGroup({
    //WOTypeId: new FormControl(),
    WOTypeCode: new FormControl(),
    WOTypeName: new FormControl(),
    DurationMinutes: new FormControl(),
  });
  public title;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private wotypeservice: WOTypeService, public dialogRef: MatDialogRef<AddorEditWOTypeComponent>) {
    console.log(this.data, "sdasdadsa");
    if (data.wotype) {
      this.title = 'Edit WOType';
      this.WOTypeForm.patchValue(this.data.wotype);
    } else {
      this.title = 'Add WOType';
    }
  }

  //getters 
  get WOTypeId(): AbstractControl {
    return this.WOTypeForm.get('WOTypeId') as FormGroup;
  }
  get WOTypeCode(): AbstractControl {
    return this.WOTypeForm.get('WOTypeCode') as FormGroup;
  }
  get WOTypeName(): AbstractControl {
    return this.WOTypeForm.get('WOTypeName') as FormGroup;
  }
  get DurationMinutes(): AbstractControl {
    return this.WOTypeForm.get('DurationMinutes') as FormGroup;
  }
  ngOnInit(): void {
  }

  public addWOType() {
    this.wotypeservice.registerWOType(this.WOTypeForm.value).subscribe((result) => {
      console.log(result);
      this.dialogRef.close(result);
    })
  }
  public editWOType() {

    this.wotypeservice.updateWOType(this.WOTypeForm.value, this.data.wotype.id).subscribe((result) => {
      console.log(result);
      this.dialogRef.close(result);
    })
  }

}
