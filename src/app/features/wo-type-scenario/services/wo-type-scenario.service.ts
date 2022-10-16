import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WOTypeScenarioWrapper } from 'src/app/core/interfaces/WOTypeScenarioWrapper';
import { environment } from 'src/environments/environment';
import { WoTypeScenarioServiceModuleModule } from './wo-type-scenario-service-module.module';

@Injectable({
  providedIn: WoTypeScenarioServiceModuleModule
})
export class WoTypeScenarioService {
  private readonly url_wotype = environment.WOTYPE_URL;


  constructor(private readonly _http: HttpClient) { }

  public getAllWOTypeScenarios() {
    return this._http.get<WOTypeScenarioWrapper[]>(this.url_wotype + '/WOTypeScenario');
  }

  public getWOTypeScenariosById(id: any) {
    return this._http.get<WOTypeScenarioWrapper[]>(this.url_wotype + `/WOTypeScenario/${id}`);
  }

  public createWOTypeScenario(wotype: WOTypeScenarioWrapper) {
    return this._http.post<boolean>(this.url_wotype + '/WOTypeScenario', wotype);
  }

  public deleteWOTypeScenario(id: any) {
    return this._http.delete(this.url_wotype + `/WOTypeScenario/${id}`);
  }

  public updateWOTypeScenario(wotype: WOTypeScenarioWrapper, id: any) {
    return this._http.put<WOTypeScenarioWrapper[]>(this.url_wotype + `/WOTypeScenario/${id}`, wotype);
  }

}
