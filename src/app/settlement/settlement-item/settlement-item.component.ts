import { Component, OnInit } from '@angular/core';


import { SettlementItem }    from '../settlement-item';
import {SettlementTypes} from "../settlement-types.enum";

@Component({
  selector: 'app-settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

   entry = new SettlementItem( '', 0, new Date(), 0);

   entries = [] as SettlementItem[];
   // entry = "";
  types= [  "Obciążenie",
    "Płatność",
    "Nadpłata"];

  addEntry(value: SettlementItem) {
    debugger;
    console.log(value);
    this.entries.push(value);
  }

  removeEntry(){console.log("Clicked!!!");}

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.entry); }
}
