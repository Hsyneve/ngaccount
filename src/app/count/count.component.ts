import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountService } from '../account.service';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  public activeValue: Number;
  totalcount: Number;
  constructor(private service: AccountService) {
    this.totalcount = this.service.GetTotallCount();
  }
  ngOnInit() {
    this.activeValue = 1;
  }


}
