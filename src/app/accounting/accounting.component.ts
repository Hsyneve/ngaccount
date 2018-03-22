import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { WeUITopTips } from 'angular4-weui';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})

export class AccountingComponent implements OnInit {
  money: number; // 金额
  billTypes = []; // 记账类型
  contentStyle = {   // 绑定的样式
    'overflow': 'scroll',
    'height': window.screen.availHeight - 145 + 'px'
  };
  @ViewChild('TopTip') TopTip: WeUITopTips;
  toastText = '';
  private alert(msg) {
    this.toastText = msg;
    this.TopTip.show();
  }
  constructor(private service: AccountService) {
    this.service.getBillTypes().then(types => this.billTypes = types);


  }
  add(obj) {

    if (this.money > 0) {
      this.service.AddBills(this.money);
      this.alert('记账成功');
    } else {
      this.alert('请输入金额');
    }

  }

  ngOnInit() {


  }

}
