import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-yearcount',
  templateUrl: './yearcount.component.html',
  styleUrls: ['./yearcount.component.css']
})
export class YearcountComponent implements OnInit {
  option: EChartOption;
  constructor() { }

  ngOnInit() {
    this.option = {
      title: {
        text: '年账目大类统计',
        subtext: '虚构数据',
        left: 'center'
    },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [
            { value: 235, name: '人情往来' },
            { value: 274, name: '房租水电' },
            { value: 310, name: '居家用品' },
            { value: 335, name: '交通费用' },
            { value: 400, name: '水果餐饮' }
          ]
        }
      ]
    };
  }

}
