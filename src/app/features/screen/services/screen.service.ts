import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScreenWrapper } from 'src/app/core/interfaces/ScreenWrapper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  private readonly url_wotype = environment.WOTYPE_URL;


  constructor(private readonly _http: HttpClient) { }

  public getAllScreens() {
    return this._http.get<ScreenWrapper[]>(this.url_wotype + '/Screen');
  }

  public geScreenById(id: any) {
    return this._http.get<ScreenWrapper>(this.url_wotype + `/Screen/${id}`);
  }

  public createScreen(wotype: ScreenWrapper) {
    return this._http.post<boolean>(this.url_wotype + '/Screen', wotype);
  }

  public deleteScreen(id: any) {
    return this._http.delete(this.url_wotype + `/Screen/${id}`);
  }

  public updateScreen(wotype: ScreenWrapper, id: any) {
    return this._http.put<ScreenWrapper[]>(this.url_wotype + `/Screen/${id}`, wotype);
  }
}
