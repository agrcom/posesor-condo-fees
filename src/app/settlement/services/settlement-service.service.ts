import { Injectable } from '@angular/core';
import { SettlementItem } from "../settlement-item";

@Injectable()
export class SettlementService {

  constructor() { }

  date1 = new Date("2018-06-30")

  mock1 = new SettlementItem( 1,'Obciążenie', 10, new Date("2018-06-29"), 0);
  mock2 = new SettlementItem( 2,'Płatność', 20, this.date1, 1);

  entries = [] as SettlementItem[];

  getEntries(): SettlementItem[]{
    this.entries.push(this.mock1)
    this.entries.push(this.mock2)

    return this.entries
  }

  addSettlement(newEntry: SettlementItem){
    this.entries.push(newEntry)
  }

}
