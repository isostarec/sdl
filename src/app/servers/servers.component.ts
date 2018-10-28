import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from '../models/server/server';
import { ServerService } from '../servers/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  servers: Server[]; 

  ngOnInit() {
    this.serverService.getServers()
        .then((servers: Server[]) => {
          this.servers = servers;
        })
  }

}
