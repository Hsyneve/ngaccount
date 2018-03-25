import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-yearcount',
  templateUrl: './yearcount.component.html',
  styleUrls: ['./yearcount.component.css']
})
export class YearcountComponent implements OnInit {
  option: EChartOption;
  option2: EChartOption;
  monthlist = [10, 11, 12, 1, 2, 3];
  barlist = [];
  moneylist = [0, 0, 0, 0, 0, 0];
  pielist = [];
  showPie=true;

  constructor(private service: AccountService) {
    let index = -1;
    let accountlist = this.service.getAccountList();
    accountlist.forEach(item => {
      index = (this.pielist.findIndex(pieitem => {
        return pieitem.name === item.name;
      }));
      if (index >= 0) {
        this.pielist[index].value += item.money;
      } else {
        this.pielist.push({ value: item.money, name: item.name });
      }

    });
    this.barlist = this.monthlist.map(item => {
      return item.toString() + '月';

    });
    index = -1;
    accountlist.forEach(item => {
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
        text: '年账目大类统计',
        left: 'center'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: this.pielist
        }
      ]
    };
    this.option2 = {
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
