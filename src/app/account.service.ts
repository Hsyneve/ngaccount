import { Injectable } from '@angular/core';
import { BillType } from './billtypes';
import {AccountItem} from './accountitem';
import { BILLTYPES } from './mock-data';
@Injectable()
export class AccountService {
  totalbills: number = 0;
  Accountlist: AccountItem[] = [
    { typeid: 11, date: new Date('2018/3/5'), money: 12, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 11, date: new Date('2018/2/6'), money: 12, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 13, date: new Date('2018/2/3'), money: 15, name: '交通', icon: 'fa-bath' },
    { typeid: 15, date: new Date('2018/2/1'), money: 17, name: '日用品', icon: 'fa-bicycle' },
    { typeid: 17, date: new Date('2018/1/29'), money: 134, name: '食材', icon: 'fa-coffee' },
    { typeid: 11, date: new Date('2018/1/20'), money: 32.5, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 20, date: new Date('2018/1/5'), money: 50, name: '学习', icon: 'fa-film' },
    { typeid: 11, date: new Date('2018/3/5'), money: 12, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 11, date: new Date('2018/2/6'), money: 12, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 13, date: new Date('2018/2/3'), money: 15, name: '交通', icon: 'fa-bath' },
    { typeid: 15, date: new Date('2018/2/1'), money: 17, name: '日用品', icon: 'fa-bicycle' },
    { typeid: 17, date: new Date('2018/1/29'), money: 134, name: '食材', icon: 'fa-coffee' },
    { typeid: 11, date: new Date('2018/1/20'), money: 32.5, name: '一般', icon: 'fa-thermometer-full' },
    { typeid: 20, date: new Date('2018/1/5'), money: 50, name: '学习', icon: 'fa-film' }
  ];
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
    this.totalbills = 0;
    this.Accountlist.forEach(item => {
      this.totalbills += item.money;
    });
    return this.totalbills;
  }
  AddBills(item: AccountItem): void {
    this.Accountlist.unshift(item);
    // this.totalbills = this.totalbills * 1 + item.money * 1;
  }
  DeleteBill(): void {
  }
  getAccountList(): AccountItem[] {
    return this.Accountlist;
  }

}


