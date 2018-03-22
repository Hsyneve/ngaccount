import { Injectable } from '@angular/core';
import { BillType } from './billtypes';
import { BILLTYPES } from './mock-data';
@Injectable()
export class AccountService {
  totalbills: number = 0;
  constructor() { }
  getBillTypes(): Promise<BillType[]> {
    // return Promise.resolve(HEROES);
    return new Promise(resolve => {
      resolve(BILLTYPES);
    });
  }
  GetBills(): void {
  }
  GetCount(): void {
  }
  GetTotallCount(): number {
    return this.totalbills;
  }
  AddBills(bill: number): void {
    this.totalbills = this.totalbills*1 + bill*1;
  }
  DeleteBill(): void {
  }
}
