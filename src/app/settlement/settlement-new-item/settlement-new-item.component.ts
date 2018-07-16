import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SettlementItem, Settelment_Types } from '../settlement-item';
import { SettlementService } from '../services/settlement-service.service';

@Component({
  selector: 'settlement-new-item',
  templateUrl: './settlement-new-item.component.html',
  styleUrls: ['./settlement-new-item.component.css']
})

export class SettlementNewItemComponent implements OnInit {

  constructor(private service: SettlementService, private fb: FormBuilder) { }

  settlementNewItemForm: FormGroup;
  types = Settelment_Types;

  addEntry() {
    this.service.addSettlement(new SettlementItem(
      this.service.getNewId(),
      this.settlementNewItemForm.get('settelmentName').value,
      this.settlementNewItemForm.get('settelmentAmount').value,
      this.settlementNewItemForm.get('settelmentDate').value,
      this.settlementNewItemForm.get('settelmentIntrest').value
    ));
    console.log(this.settlementNewItemForm.get('settelmentDate').value)
  }

  createForm() {
    this.settlementNewItemForm = this.fb.group({
      id: '',
      settelmentName: this.types[0],
      settelmentAmount: '0',
      settelmentDate: '',
      settelmentIntrest: '0',
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
