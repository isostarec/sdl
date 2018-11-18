import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServerService } from '../servers/server.service';
import {QueryService} from '../queryes/query.service';
import { Query } from '../models/query/query';
import { Server } from '../models/server/server';


@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit {

  constructor(private serverService: ServerService, private queryService: QueryService, private toastr: ToastrService) { }

  checkedServers: string[];
  servers: Server[];
  query = new Query();

  receiveMessage($event){
    this.checkedServers = $event;
  }

  submitQuery(){
    if(!this.query.name){
      this.toastr.info("Please enter query name!");
    }
    else
    {
      this.query.servers = this.checkedServers;
      this.queryService.insertQuery(this.query);
      this.toastr.success("Query Submitted with name \"" + this.query.name + "\"");
    }

  }

  ngOnInit() {
    this.serverService.getServers()
        .then((servers: Server[]) => {
          this.servers = servers;
        })
  }

}

