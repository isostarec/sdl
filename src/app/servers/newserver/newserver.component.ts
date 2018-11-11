import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../servers/server.service';
import { Server } from '../../models/server/server';

@Component({
  selector: 'app-newserver',
  templateUrl: './newserver.component.html',
  styleUrls: ['./newserver.component.css']
})
export class NewserverComponent implements OnInit {

  constructor(private serverService : ServerService) { }

  ngOnInit() {
  }

  server = new Server();

  addServer(){
    if(!this.server.isProduction)
    {
      this.server.isProduction = false;
    }
      this.serverService.insertServer(this.server)
      alert('Server inserted successfully');
  }
}
