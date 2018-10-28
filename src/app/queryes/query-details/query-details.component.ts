import { Component, OnInit, Input } from '@angular/core';
import { QueryListComponent } from '../query-list/query-list.component'
import { Query } from '../../models/query/query';
import { QueryService } from '../query.service';
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

  constructor(private queryService: QueryService) { }

  ngOnInit() {
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
