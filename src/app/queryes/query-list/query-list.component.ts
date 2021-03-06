import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Query } from '../../models/query/query';
import { QueryService } from '../query.service';


@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css'],
  providers:[QueryService]
})
export class QueryListComponent implements OnInit {

  p: number = 1;
  M : any;
  hashtag : string = "#";
  queryes: Query[]
  selectedQuery: Query
  
  qry = new FormControl(Query);

  constructor(private queryService: QueryService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getQueryes(); 
  }  

  getQueryes(){
    this.queryService
      .getQueryes()
      .then((queryes: Query[]) => {
        this.queryes = queryes.reverse();
      })
  }

  refreshQueryData($event: Query[]){
    if($event.length === 0) return;
    
    this.queryes = $event;
    //console.log(this.queryes)
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
      servers: [],
      createDate: new Date,
      createdBy: ""
    }
  }

  onDelete(_id: string){
    if(confirm('Are you sure you want to delete this query?') == true) {
      this.queryService.deleteQuery(_id).subscribe((res) =>{
        this.toastr.info("Deleted successfully", "Info");
        this.getQueryes();
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
