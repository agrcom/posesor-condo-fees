import { Component, OnInit } from '@angular/core';
import {SettlementItem} from "./settlement-item";

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  constructor() { }

   entries = [] as SettlementItem[];

  ngOnInit() {
  }

}
