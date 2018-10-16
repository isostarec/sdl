import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Query } from '../../models/query/query';
import { QueryService } from '../query.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { QueryDetailsComponent } from '../query-details/query-details.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css'],
  providers:[QueryService]
})
export class QueryListComponent implements OnInit {

  hashtag : string = "#";
  queryes: Query[]
  selectedQuery: Query

  qry = new FormControl(Query);

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService
      .getQueryes()
      .then((queryes: Query[]) => {
        this.queryes = queryes
      })    
  }  

  receiveQuery($event) {
    this.createQuery($event);
  }

  private getIndexOfQuery = (queryId: String) => {
    return this.queryes.findIndex((query) => {
      return query._id === queryId;
    });
  }

  selectQuery(query: Query) {
    this.selectedQuery = query;
  }


  createNewQuery(){
    let query: Query = {
      name: "",
      info: "",
      value: ""
    }
  }

  deleteQuery = (queryId: String) => {
    var idx = this.getIndexOfQuery(queryId);
    if (idx !== -1) {
      this.queryes.splice(idx, 1);
      this.selectQuery(null);
    }
    return this.queryes;
  }

  addQuery = (query: Query) => {
    this.queryes.push(query);
    return this.queryes;
  }

  updateQuery = (query: Query) => {
    var idx = this.getIndexOfQuery(query._id);
    if (idx !== -1) {
      this.queryes[idx] = query;
      this.selectQuery(query);
    }
    return this.queryes;
  }

  createQuery(query: Query) {
    return this.queryService.insertQuery(query)
  }

}
