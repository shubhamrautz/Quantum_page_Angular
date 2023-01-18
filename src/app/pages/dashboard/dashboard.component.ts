import { Component ,Injectable,Input, OnInit} from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  details = []
  cards =[]

  constructor(  private _data: CardDataService){

  }

  ngOnInit(){
    this._data.getDetails()
    .subscribe(data => this.details =data);
    
      this._data.getCards()
      .subscribe(data => this.cards =data);
  }

  
  
}
