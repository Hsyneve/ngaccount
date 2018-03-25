import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
// import { WeUIPicker } from '../../../node_modules/angular-weui/picker/weui.picker';
// import { WeUIDatePicker } from '../../../node_modules/angular-weui/picker/weui.date.picker';
@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  accountlist = [];
  billType = [];

  today = new Date();
  contentStyle = {   // 绑定的样式
    'overflow': 'scroll',
    'height': window.screen.availHeight - 155 + 'px'
  };
  // @ViewChild('picker3') picker3: WeUIDatePicker;
  constructor(private service: AccountService) {
    this.accountlist = this.service.getAccountList();
  }
  // showDatePicker(): void {
  //   this.picker3.show().then((value: any) => {
  //   }).catch(function (error) {
  //     // 处理getJSON和前一个回调函数运行时发生的错误
  //     console.log(error);
  //   });
  // }

  ngOnInit() {
  }

}
