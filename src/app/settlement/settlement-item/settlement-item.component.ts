import { Component, OnInit, Input } from '@angular/core';

import { SettlementItem }    from '../settlement-item';
import { SettlementService } from "../services/settlement-service.service";

@Component({
  selector: 'settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

  constructor(private service:SettlementService){}

  @Input() entry: SettlementItem

  types= [  "Obciążenie",
 "Płatność",
 "Nadpłata"];

  calculateSaldo(){return 42}

  removeEntry(id:number){
    console.log("Remove" + id)
    this.service.deleteSetllement(id)
  }

  ngOnInit() {
  }

//  get diagnostic() { return JSON.stringify(this.entry); }
}
