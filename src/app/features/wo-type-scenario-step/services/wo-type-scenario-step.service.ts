import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WOTypeScenarioStepWrapper } from 'src/app/core/interfaces/WOTypeScenarioStepWrapper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoTypeScenarioStepService {

  private readonly url_wotype = environment.WOTYPE_URL;


  constructor(private readonly _http: HttpClient) { }

  public getAllWOTypeScenarioSteps() {
    return this._http.get<WOTypeScenarioStepWrapper[]>(this.url_wotype + '/WOTypeScenarioStep');
  }

  public getWOTypeScenarioStepsById(id: any) {
    return this._http.get<WOTypeScenarioStepWrapper[]>(this.url_wotype + `/WOTypeScenarioStep/${id}`);
  }

  public createWOTypeScenarioStep(wotype: WOTypeScenarioStepWrapper) {
    return this._http.post<boolean>(this.url_wotype + '/WOTypeScenarioStep', wotype);
  }

  public deleteWOTypeScenarioStep(id: any) {
    return this._http.delete(this.url_wotype + `/WOTypeScenarioStep/${id}`);
  }

  public updateWOTypeScenarioStep(wotype: WOTypeScenarioStepWrapper, id: any) {
    return this._http.put<WOTypeScenarioStepWrapper[]>(this.url_wotype + `/WOTypeScenarioStep/${id}`, wotype);
  }

}
