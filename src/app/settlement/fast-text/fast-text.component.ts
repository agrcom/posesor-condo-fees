import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SettlementItem, Settelment_Types } from '../settlement-item';
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
  
  castToSettlementItem(splitted: string[]): SettlementItem {
    var settelemntTitle = this.normalizeSettlementTitle(splitted[0]);    
    var strDate = splitted[2].toString();
    var properAmount = this.setPosOrNeg(+splitted[1], settelemntTitle);

    return new SettlementItem(
      this.service.getNewId(),
      settelemntTitle,
      properAmount,
      new Date(strDate),
      0.055,
      this.calculateBalance(properAmount)
    );
  }
  
  normalizeSettlementTitle(input: string): string {
    if(input==="o" || input==="O" || input==="obciążenie" ||input==="obciozenie"){
      return Settelment_Types[0];
    }else if(input === "p" || input === "P" || input==="płatność" ||input==="platnosc" ){
      return Settelment_Types[1];
    }
  }

  setPosOrNeg(input: number, str: string):number{
    if(str===Settelment_Types[0]){
      return -Math.abs(input);
    }else if(str==Settelment_Types[1]){
      return Math.abs(input)
    }
  }

  calculateBalance(currentAmount: number): number { 
    return (this.service.getFirstSettlement().settlementBalance) + currentAmount;
  }
  

  submitFastText() {
    console.log("Fast Text is subbmited - " + this.fastTextGroup.get("fastTextInputControl").value)
    var textToParse = String(this.fastTextGroup.get("fastTextInputControl").value);

    var splitted = textToParse.split("/", 3);

    this.service.addSettlement(this.castToSettlementItem(splitted));
  }


  /*TODO:
    - add validators 
  */
}
