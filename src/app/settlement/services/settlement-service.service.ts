import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SettlementItem } from "../settlement-item";

@Injectable()
export class SettlementService {

  constructor() {
    this.entries.push(this.clearEntry);
  }

  Id: number = 0;

  entries = [] as SettlementItem[];

  clearEntry = new SettlementItem(0, "Płatność", 0, new Date("1900-01-01"), 0, 0);

  getSettlements(): Observable<SettlementItem[]> {
    //new SettlementItem(99,"Płatność", 10, new Date("2019-03-12"),2,0)
    return of(this.entries)
  }

  addSettlement(newEntry: SettlementItem) {
    this.entries.unshift(newEntry)
  }

  getPreviousSettlement(currentEntry: SettlementItem): SettlementItem {
    var index = this.entries.indexOf(currentEntry);
    if (index != 0) return this.entries[index - 1];
    else return this.clearEntry;
  }

  getFirstSettlement(): SettlementItem {
    return this.entries[0];

  }

  deleteSetllement(id: number) {
    let filtered = this.entries.filter(e => e.id !== id)
    this.entries = filtered
  }

  getNewId(): number {
    this.Id = this.Id + 1
    return this.Id
  }
}
