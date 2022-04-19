import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScreenWrapper } from '../interfaces/ScreenWrapper';
import { WOType } from '../interfaces/WOTypeCommand';
import { WOTypeScenarioStepWrapper } from '../interfaces/WOTypeScenarioStepWrapper';
import { WOTypeScenarioWrapper } from '../interfaces/WOTypeScenarioWrapper';
import { WOTypeWrapper } from '../interfaces/WOTypeWrapper';


@Injectable({
  providedIn: 'root'
})
export class WOTypeService {
  private url_identity = environment.API_URL;
  private url_wotype = environment.WOTYPE_URL;
  constructor(public readonly _http: HttpClient) { }
  public getallWOType() {
    return this._http.get<WOTypeWrapper[]>(this.url_wotype + '/WOTypes');
  }
  public getbyIdWOType(id: any) {
    return this._http.get<WOTypeWrapper>(this.url_wotype + `/WOTypes/${id}`);
  }
  public registerWOType(wotype: WOType) {
    return this._http.post<boolean>(this.url_wotype + '/WOTypes', wotype);
  }
  public deleteWOType(id: any) {
    return this._http.delete(this.url_wotype + `/WOTypes/${id}`);
  }
  public updateWOType(wotype: WOType, id: any) {
    return this._http.put<WOTypeWrapper[]>(this.url_wotype + `/WOTypes/${id}`, wotype);
  }

  public getWOTypeScenarios(id: any) {
    return this._http.get<WOTypeScenarioWrapper[]>(this.url_wotype + `/WOTypeScenario/${id}`)
  }
  public getWOTypeScenarioSteps(id: any) {
    return this._http.get<WOTypeScenarioStepWrapper[]>(this.url_wotype + `/WOTypeScenarioStep/${id}`)
  }

  public getScreenById(id: any) {
    return this._http.get<ScreenWrapper>(this.url_wotype + `/Screen/${id}`)
  }
}
