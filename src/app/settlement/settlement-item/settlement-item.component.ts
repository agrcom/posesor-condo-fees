import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SettlementItem, Settelment_Types } from '../settlement-item';
import { SettlementService } from '../services/settlement-service.service';

@Component({
  selector: 'settlement-item',
  templateUrl: './settlement-item.component.html',
  styleUrls: ['./settlement-item.component.css']
})
export class SettlementItemComponent implements OnInit {

  constructor(private service: SettlementService, private fb: FormBuilder) { }

  settlementItemForm: FormGroup;
  types = Settelment_Types;

  @Input() entry: SettlementItem;

  
  removeEntry(id: number) {
    console.log('Remove ' + id);
    this.service.deleteSetllement(id);
    
    this.settlementItemForm.updateValueAndValidity();
  }

  save() { console.log('Save() method triggered'); }
  
  createForm() {
    this.settlementItemForm = this.fb.group({
      id: this.entry.id,
      settelmentName: this.entry.settelmentName,
      settelmentAmount: this.entry.settelmentAmount,
      settelmentDate: this.entry.settelmentDate.getDate()+"-" +(this.entry.settelmentDate.getMonth()+1)+"-" +this.entry.settelmentDate.getFullYear(),
      settelmentIntrest: this.entry.settelmentIntrest,
      settelmentBalance: this.entry.settlementBalance
    });
  }

  ngOnInit() {
    this.createForm();
  }
}
