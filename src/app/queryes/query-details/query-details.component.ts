import { Component, OnInit, Input } from '@angular/core';
import { QueryListComponent } from '../query-list/query-list.component'
import { Query } from '../../models/query/query';
import { Server } from '../../models/Server/server';
import { QueryService } from '../query.service';
import { ServerService } from '../../servers/server.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query-details',
  templateUrl: './query-details.component.html',
  styleUrls: ['./query-details.component.css']
})
export class QueryDetailsComponent implements OnInit {
  @Input()
  query : Query;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private queryService: QueryService, private serverService: ServerService) { }

  server: String;
  servers: Server[];
  queryes: Query[];
  queryServers: String[];
  serverIdArr: String[];

  ngOnInit() {
      this.serverService.getServers()
        .then((servers: Server[]) => {
          this.servers = servers;
          // this.serverIdArr = this.servers.map(x => x._id);
          // let something = this.servers.filter(x => x._id = "5bd5a4532784d63fdc67438b")
        })
  }

  onDelete(_id: string){
    if(confirm('Are you sure you want to delete this query?') == true) {
      this.queryService.deleteQuery(_id).subscribe((res) =>{
        //this.M.toast({ html: 'deleted successfully'})
        alert('Deleted successfully');
      })
    }
  }

}
