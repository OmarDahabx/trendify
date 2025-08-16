import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sgames {
  private readonly httpClient = inject(HttpClient);
  
  getGamesData():Observable<any> {
    return this.httpClient.get('https://my-json-server.typicode.com/OmarDahabx/fake-games-api/games') ;
  }
}
