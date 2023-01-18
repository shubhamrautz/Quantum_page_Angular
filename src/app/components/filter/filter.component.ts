import { Component, OnInit,Input } from '@angular/core';
import { Detail } from 'src/app/interfaces/detail';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit{

  @Input() filterdetails! : Detail;
  
  ngOnInit(){

  }
}
