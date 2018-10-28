import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Query } from '../../models/query/query';
import { QueryService } from '../query.service';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css'],
  providers:[QueryService]
})
export class QueryListComponent implements OnInit {

  M : any;
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
      value: "",
      createDate: new Date,
      createdBy: ""
    }
  }

  // deleteQuery = (queryId: String) => {
  //   var idx = this.getIndexOfQuery(queryId);
  //   if (idx !== -1) {
  //     this.queryes.splice(idx, 1);
  //     this.selectQuery(null);
  //   }
  //   return this.queryes;
  // }

  onDelete(_id: string){
    if(confirm('Are you sure you want to delete this query?') == true) {
      this.queryService.deleteQuery(_id).subscribe((res) =>{
        //this.M.toast({ html: 'deleted successfully'})
        alert('Deleted successfully');
      })
    }
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
