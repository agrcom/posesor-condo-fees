export class SettlementItem {

// Model for single settlement entry
  constructor(
    public id: number,
    public settelment_name: string,
    public settelment_amount: number,
    public settelment_date: Date,
    public settelment_intrest?: number,
  ){}
}
