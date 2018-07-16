import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SettlementItem } from '../settlement-item';
import { SettlementService } from '../services/settlement-service.service';

@Component({
  selector: 'app-fast-text',
  templateUrl: './fast-text.component.html',
  styleUrls: ['./fast-text.component.css']
})
export class FastTextComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: SettlementService) { }

  fastTextGroup: FormGroup;

  ngOnInit() {
    this.createFastText();

  }

  createFastText() {
    this.fastTextGroup = this.fb.group({
      fastTextInputControl: ''
    });
  }

  castToSettlementItem(splitted: String[]): SettlementItem {
    // this.normalizeSettlementTitle(splitted[0]);
    var strDate = splitted[2].toString();
    console.log(new Date(strDate));

    return new SettlementItem(
      this.service.getNewId(),
      "",
      +splitted[1],
      new Date(strDate)
    );

  }

  submitFastText() {
    console.log("Fast Text is subbmited - " + this.fastTextGroup.get("fastTextInputControl").value)
    var textToParse = String(this.fastTextGroup.get("fastTextInputControl").value);

    var splitted = textToParse.split("/", 3);

    this.service.addSettlement(this.castToSettlementItem(splitted));
  }


  /*TODO:
    - parse input to settlementItem model 
    - add validators 
  */
}
