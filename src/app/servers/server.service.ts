import { Injectable } from '@angular/core';
import { Server } from '../models/server/server';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Globals } from '../globals.module';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
    newServer = new (Server);

    
  constructor(private httpClient: HttpClient, private Globals: Globals) { }

  private serversUrl = `http://${this.Globals.API_ADDR}/api/servers`;

  // get ("/api/servers")
  getServers(): Promise<void | Server[]> {
    return this.httpClient.get<any>(this.serversUrl).pipe(
      map(res => res.data as Server[])
    )
    .toPromise()
    .catch(this.handleError)
  }

  createServer(newServer: Server): Promise<void | Server> {
    return this.httpClient.post<any>(this.serversUrl, newServer)
               .toPromise()
               .then(response => response.data as Server)
               .catch(this.handleError);
  }

  insertServer(newServer: Server): Promise<void | Server> {
    return this.httpClient.post(this.serversUrl, newServer).pipe(
      map(res => res as Server)
    )
    .toPromise();
  }

  deleteServer(_id: string) {
    return this.httpClient.delete(this.serversUrl + `/?id=${_id}`);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}