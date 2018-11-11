import { Injectable } from '@angular/core';
import { Query } from '../models/query/query';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Globals } from '../globals.module';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient: HttpClient, private Globals: Globals) { }

  private queryesUrl = `http://${this.Globals.API_ADDR}/api/queryes`;

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
    .toPromise();
  }

  deleteQuery(_id: string) {
    return this.httpClient.delete(this.queryesUrl + `/delete/${_id}`);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}