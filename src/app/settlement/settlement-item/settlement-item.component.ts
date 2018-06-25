import { Component, OnInit } from '@angular/core';


import { SettlementItem }    from '../settlement-item';

@Component({
  selector: 'app-settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

  constructor() { }

  removeEntry(){console.log("Clicked!!!")}

  ngOnInit() {
  }

}
