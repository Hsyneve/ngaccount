import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-monthcount',
  templateUrl: './monthcount.component.html',
  styleUrls: ['./monthcount.component.css']
})
export class MonthcountComponent implements OnInit {
  option: EChartOption;
  monthlist = [10, 11, 12, 1, 2, 3];
  barlist = [];
  moneylist = [0, 0, 0, 0, 0, 0];
  constructor(private service: AccountService) {
    this.barlist = this.monthlist.map(item => {
      return item.toString() + '月';

    });

    let index = -1;
    this.service.getAccountList().forEach(item => {
      index = (this.monthlist.findIndex(pieitem => {
        return pieitem === item.date.getMonth() + 1;
      }));
      if (index >= 0) {
        this.moneylist[index] += item.money;
      }

    });
  }

  ngOnInit() {
    this.option = {
      title: {
        text: '近六个月流水'
      },
      tooltip: {},
      legend: {
        data: ['金额/元']
      },
      xAxis: {
        data: this.barlist
        // ["10月", "11月", "12月", "1月", "2月", "3月"]
      },
      yAxis: {},
      series: [{
        name: '金额/元',
        type: 'bar',
        data: this.moneylist
        // [5, 20, 36, 10, 10, 20]
      }]
    };
  }
}

