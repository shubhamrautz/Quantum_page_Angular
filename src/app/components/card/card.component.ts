import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{


  @Input()
  carddetails!: Card;

constructor(){

}

selectdisabled?:boolean
preview?:boolean
manage?:boolean
grade?:boolean
reports?:boolean
favorite?:boolean


getUrl(){

  if(!this.carddetails.classes){
    this.carddetails.classes = ["No Classes"]
    this.selectdisabled = true
}
  this.preview = !this.carddetails.actions.preview
  this.manage = !this.carddetails.actions.manage
  this.grade = !this.carddetails.actions.grade
  this.reports =!this.carddetails.actions.reports
  this.favorite = !this.carddetails.favorite

  return `url(${this.carddetails.image})`

}

ngOnInit(): void {

}

}
