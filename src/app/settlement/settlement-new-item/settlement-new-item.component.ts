import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SettlementItem }    from '../settlement-item';
import { SettlementService } from "../services/settlement-service.service";

@Component({
  selector: 'settlement-new-item',
  templateUrl: './settlement-new-item.component.html',
  styleUrls: ['./settlement-new-item.component.css']
})

export class SettlementNewItemComponent implements OnInit {

  constructor(private service:SettlementService){}

  entry = new SettlementItem( 0,'Obciążenie', 0, new Date(), 0)

  types= [  "Obciążenie",
  "Płatność",
  "Nadpłata"];

   addEntry(value: SettlementItem) {
     console.log(value);

    this.service.addSettlement(new SettlementItem(this.service.entries.length +1,value.settelment_name,
       value.settelment_amount, value.settelment_date, value.settelment_intrest))
   }

  ngOnInit() {  }
  
}
