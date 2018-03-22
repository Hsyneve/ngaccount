import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-monthcount',
  templateUrl: './monthcount.component.html',
  styleUrls: ['./monthcount.component.css']
})
export class MonthcountComponent implements OnInit {
  option: EChartOption;
  constructor() { }

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
        data: ["1月", "2月", "3月", "4月", "5月", "6月"]
      },
      yAxis: {},
      series: [{
        name: '金额/元',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }
}

