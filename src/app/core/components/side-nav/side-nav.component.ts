import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { WoTypeContainerComponent } from 'src/app/features/wo-type/wo-type-container/wo-type-container.component';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    public isHandset$: Observable<boolean>;



    constructor(private readonly _breakpointObserver: BreakpointObserver) { }

    ngOnInit(): void {
        this.isHandset$ = this._breakpointObserver.observe(Breakpoints.Handset)
            .pipe(
                map(result => result.matches),
                shareReplay()
            );

    }

}
