import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Query } from '../models/query/query';

export interface appQuery {
  name : string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private queryesUrl =  'http://localhost:8000/api/queryes';

  constructor(private httpClient : HttpClient) {}

}
