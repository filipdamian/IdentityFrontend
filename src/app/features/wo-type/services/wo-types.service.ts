import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WOType } from 'src/app/core/interfaces/WOTypeCommand';
import { WOTypeWrapper } from 'src/app/core/interfaces/WOTypeWrapper';
import { environment } from 'src/environments/environment';
import { WoTypeModule } from '../wo-type.module';


@Injectable({
    providedIn: WoTypeModule
})
export class WOTypeService {
    private readonly url_wotype = environment.WOTYPE_URL;

    constructor(private readonly _http: HttpClient) { }

    public getAllWOTypes() {
        return this._http.get<WOTypeWrapper[]>(this.url_wotype + '/WOTypes');
    }

    public getWOTypeById(id: any) {
        return this._http.get<WOTypeWrapper>(this.url_wotype + `/WOTypes/${id}`);
    }

    public createWOType(wotype: WOType) {
        return this._http.post<boolean>(this.url_wotype + '/WOTypes', wotype);
    }

    public deleteWOType(id: any) {
        return this._http.delete(this.url_wotype + `/WOTypes/${id}`);
    }

    public updateWOType(wotype: WOType, id: any) {
        return this._http.put<WOTypeWrapper[]>(this.url_wotype + `/WOTypes/${id}`, wotype);
    }
}
