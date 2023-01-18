import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardDataService {

  private _details = "../../assets/data/details.json"
  private _courses = "../../assets/data/courses-tabs.json"

  constructor(private httpClient: HttpClient) { }

  getCards(){
    return this.httpClient.get<any>(this._courses)
  }

  getDetails(){
    return this.httpClient.get<any>(this._details)
  }
}
