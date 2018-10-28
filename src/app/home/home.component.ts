import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../servers/server.service';
import { Query } from '../models/query/query';
import { Server } from '../models/server/server';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(private serverService: ServerService) { }

  servers: Server[];
  query = new Query();

  @Output() submitQueryEvent = new EventEmitter<Query>();

  submitQuery(){
    if(!this.query.name){
      return alert("Please insert query name");
    }
    let checkedServers = this.servers.filter(x => x.hasOwnProperty('checked'));
    this.query.servers = checkedServers.map(x => x._id);
    //console.log(query.servers);
    alert("Query Submitted with name \"" + this.query.name + "\"");
    this.submitQueryEvent.emit(this.query);
  }

  ngOnInit() {
    this.serverService.getServers()
        .then((servers: Server[]) => {
          this.servers = servers;
        })
  }

}
