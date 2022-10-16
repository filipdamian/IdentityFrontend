import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
import { WOTypeService } from '../services/wo-types.service';

@Component({
    selector: 'app-add-wo-type',
    templateUrl: './add-wo-type.component.html',
    styleUrls: ['./add-wo-type.component.scss']
})
export class AddWoTypeComponent implements OnInit {

    public WOTypeForm: FormGroup = new FormGroup({
        WOTypeCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        WOTypeName: new FormControl(),
        DurationMinutes: new FormControl(),
    });
    constructor(private readonly _woTypeService: WOTypeService,
        private readonly router: Router,
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
    public addWotype() {
        if (this.WOTypeForm.valid === true) {
            this._woTypeService.createWOType(this.WOTypeForm.value).subscribe(response => {
                if (response === true) {
                    this._toastrService.successMessage("WoType successfully added");
                    this.router.navigate(["/features/woType"]);
                }
            });
        }
    }
}
