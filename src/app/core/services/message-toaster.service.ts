import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageToasterService {

  constructor(private toastr: ToastrService) { }

  public successMessage(successMessage: any) {
    this.toastr.success(successMessage);
  }
  public warningMessage(warningMessage: any) {
    this.toastr.warning(warningMessage);
  }
  public errorMessage(errorMessage: any) {
    this.toastr.error(errorMessage);
  }
}
