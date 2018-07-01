import { Component, OnInit, Input } from '@angular/core';

import { SettlementItem }    from '../settlement-item';

@Component({
  selector: 'settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

  @Input() entry: SettlementItem

  types= [  "Obciążenie",
 "Płatność",
 "Nadpłata"];

  calculateSaldo(){return 42}

  removeEntry(){console.log("Remove")}

  ngOnInit() {
  }

//  get diagnostic() { return JSON.stringify(this.entry); }
}
