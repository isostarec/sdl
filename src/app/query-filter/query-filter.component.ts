import { Component, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../queryes/query.service';
import { Server } from '../models/server/server';
import { Query } from '../models/query/query';


@Component({
  selector: 'app-query-filter',
  templateUrl: './query-filter.component.html',
  styleUrls: ['./query-filter.component.css']
})
export class QueryFilterComponent {

  @Output() sendUniqueQueryes = new EventEmitter<Query[]>();


  servers: Server[];
  queryes: Query[];
  event: string[] = [];
  filteredQueryes: Query[];
  uniqueQueryes: Query[] = [];

  constructor(private queryService: QueryService) { }

  getEventData($event){
    this.event = $event;
  }

  applyFilter(){
    this.uniqueQueryes = [];
    this.filteredQueryes = [];
    this.queryService.getQueryes()
        .then((queryes: Query[]) => {
          this.queryes = queryes.filter((e) => {
            if(this.event.length === 0) return;
            this.event.forEach(ee => {
              if(e.servers.includes(ee)){
                    this.filteredQueryes.push(e);
              }
            });
          });
          this.getUniqueQueryes(this.filteredQueryes);
          this.sendUniqueQueryes.emit(this.uniqueQueryes);
        })
  }

  getUniqueQueryes(array: Query[]){
    return array.filter((i) => {
      let ind = this.uniqueQueryes.findIndex(x => x._id === i._id);
      if(ind <= -1){
        this.uniqueQueryes.push(i)
      }
    });
  }
}
