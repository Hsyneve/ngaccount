import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';


// import { WeUITabBarItem } from 'angular-weui/tabbar/weui.tabbar.item';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public activeValue: string;
  constructor() { }

  ngOnInit() {
  }
  // onActivated(item: WeUITabBarItem): void {
  //   this.activeValue = item.value;
  //   console.log(`当前选中的是：${item.value}`);
  // }
}
