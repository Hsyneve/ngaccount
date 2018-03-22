import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeUIModule } from 'angular4-weui';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountingComponent } from './accounting/accounting.component';
import { CountComponent } from './count/count.component';
import { YearcountComponent } from './yearcount/yearcount.component';
import { MonthcountComponent } from './monthcount/monthcount.component';
import { AppRoutingModule } from './app-routing.module';
import { EchartsNg2Module } from 'echarts-ng2';
import {AccountService} from './account.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountingComponent,
    CountComponent,
    YearcountComponent,
    MonthcountComponent
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule, RouterModule, WeUIModule, AppRoutingModule, EchartsNg2Module
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
