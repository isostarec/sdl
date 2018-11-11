import { Globals } from '../globals.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface appQuery {
  name : string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient : HttpClient, private Globals: Globals) {}

  private queryesUrl =  `http://${this.Globals.API_ADDR}/api/queryes`;

}
