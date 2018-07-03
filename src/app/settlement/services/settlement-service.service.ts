import { Injectable } from '@angular/core';
import { SettlementItem } from "../settlement-item";

@Injectable()
export class SettlementService {

  constructor() { }

  Id:number = 0;
  date1 = new Date("2018-06-30")

  mock1 = new SettlementItem( 99,'Obciążenie', 10, new Date("2018-06-29"), 0);
  mock2 = new SettlementItem( 98,'Płatność', 20, this.date1, 1);

  entries = [] as SettlementItem[];

  getSettlements(): SettlementItem[]{
    this.entries.push(this.mock1)
    this.entries.push(this.mock2)

    return this.entries
  }

  addSettlement(newEntry: SettlementItem){
    this.entries.unshift(newEntry)
  }

  deleteSetllement(id:number){
    debugger
    let filtered = this.entries.filter(e => e.id !== id)
    this.entries = filtered
  }

  getNewId(): number{
    this.Id = this.Id + 1
    return this.Id
  }
}
