import { Component, OnInit } from '@angular/core';

import { SettlementItem }    from '../settlement-item';
import {SettlementTypes} from "../settlement-types.enum";
import {SettlementComponent} from "../settlement.component";

@Component({
  selector: 'app-settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

   entry = new SettlementItem( 0,'', 0, new Date(), 0);

  types= [  "Obciążenie",
    "Płatność",
    "Nadpłata"];

  addEntry(value: SettlementItem) {
    debugger;
    console.log(value);
    SettlementComponent.entries.push(new SettlementItem(SettlementComponent.entries.length +1,value.settelment_name,
      value.settelment_amount, value.settelment_date, value.settelment_intrest));
  }

  removeEntry(){console.log("Clicked!!!");}

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.entry); }
}
