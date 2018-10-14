import { Injectable } from '@angular/core';
import { Query } from '../models/query/query';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QueryService {
    private queryesUrl = 'http://localhost:8000/api/queryes';


  constructor(private httpClient: HttpClient) { }

  // get ("/api/queryes")
  getQueryes(): Promise<void | Query[]> {
    return this.httpClient.get<any>(this.queryesUrl).pipe(
      map(res => res.data as Query[])
    )
    .toPromise()
    .catch(this.handleError)
  }

  createQuery(newQuery: Query): Promise<void | Query> {
    return this.httpClient.post<any>(this.queryesUrl, newQuery)
               .toPromise()
               .then(response => response.data as Query)
               .catch(this.handleError);
  }

  insertQuery(newQuery: Query): Promise<void | Query> {
    return this.httpClient.post(this.queryesUrl, newQuery).pipe(
      map(res => res as Query)

    )
    .toPromise()
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}