import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SettlementItem } from "../settlement-item";

@Injectable()
export class SettlementService {

  constructor() { }

  Id: number = 0;

  entries = [] as SettlementItem[];

  getSettlements(): Observable<SettlementItem[]> {
    this.entries.push(new SettlementItem(99,"Płatność", 10, new Date("2019-03-12"),2,0));
    return of(this.entries)
  }

  addSettlement(newEntry: SettlementItem) {
    this.entries.unshift(newEntry)
  }

  getPreviousSettlement(currentEntry: SettlementItem): SettlementItem {
    var index = this.entries.indexOf(currentEntry);
    if (index != 0) return this.entries[index - 1];
    else return null;
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
