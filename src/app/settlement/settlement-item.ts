export class SettlementItem {

// Model for single settlement entry
  constructor(
    public id: number,
    public settelmentName: string,
    public settelmentAmount: number,
    public settelmentDate: Date,
    public settelmentIntrest?: number,
    public settlementBalance?: number,
  ){}
}

export const Settelment_Types = [ 'Obciążenie', 'Płatność', 'Korekta'];
