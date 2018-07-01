import { Component, OnInit } from '@angular/core';
import {SettlementItem} from "./settlement-item";
import {SettlementService} from './services/settlement-service.service' 

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  
  entries = [] as SettlementItem[];


  constructor(private entriesService:SettlementService) { }
   
  ngOnInit() {
    this.entries = this.entriesService.getEntries()
    
  }

}
