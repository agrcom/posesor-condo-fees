import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {SettlementItem} from "./settlement-item";
import {SettlementService} from './services/settlement-service.service' 

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  
  entries = [] as SettlementItem[];

  settlementMain = new FormGroup({});

  constructor(private entriesService:SettlementService) { }
   
  ngOnInit() {
    this.entries = this.entriesService.getSettlements()


  }

}
