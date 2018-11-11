import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';
import { ServerService } from '../servers/server.service';
import { Server } from '../models/server/server';

@Component({
  selector: 'app-server-filter',
  templateUrl: './server-filter.component.html',
  styleUrls: ['./server-filter.component.css']
})
export class ServerFilterComponent implements OnInit {

  servers: Server[];
  server: Server;

  @Output() messageEvent = new EventEmitter<String[]>();

  constructor(private serverService: ServerService) { }

  logChecked(server){
    // event.stopPropagation();
    server.checked = !server.checked;
  }

  sendMessage(server, event){
    event.stopPropagation();
    this.logChecked(server);
    let checkedServers = this.servers.filter(x => x.checked == true);
    // if(checkedServers.length === 0)
    // {
    //   let array = this.servers.map(x => x._id);
    //   this.messageEvent.emit(array);
    // }
    // else
    // {
      let array = checkedServers.map(x => x._id);
      this.messageEvent.emit(array);
    // }
  }

  ngOnInit() {
    this.serverService.getServers()
    .then((servers: Server[]) => {
      this.servers = servers;
    })
  }

}
