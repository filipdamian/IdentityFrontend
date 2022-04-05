import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmailConfirmationCommand } from 'src/app/core/interfaces/EmailConfirmationCommand';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { MessageToasterService } from 'src/app/core/services/message-toaster.service';
@Component({
    selector: 'app-emailconfirmation',
    templateUrl: './emailconfirmation.component.html',
    styleUrls: ['./emailconfirmation.component.scss']
})
export class EmailconfirmationComponent implements OnInit {
    //rxJs
    //let vs var vs const
    constructor(
        private _authService: AuthService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _toastrService: MessageToasterService
    ) { }

    ngOnInit(): void {
        let payload: EmailConfirmationCommand;
        this._route.params
            .pipe(
                take(1),
                switchMap(params => {
                    payload = {
                        confirmationToken: params["confirmationToken"]
                    }
                    return this._authService.confirmEmailAddress(payload);
                })
            )
            .subscribe((emailConfirmRoesponse: boolean) => {
                if (emailConfirmRoesponse === true) {
                    this._toastrService.successMessage("Email successfully confirmed");
                    this._router.navigate(['/auth/login']);
                    console.log("Happy path!!!")
                }
            })
    }

}
