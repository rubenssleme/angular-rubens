import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Live } from '../model/live.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  urlApi = 'http://localhost:8080/lives'; 
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }) 
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag(flag: string):Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.urlApi+ '?flag=' +flag);
  }

  public postLives(live:any):Observable<Live>{
    return this.httpClient.post<any>(this.urlApi,live, this.httpOptions);
  }
}
