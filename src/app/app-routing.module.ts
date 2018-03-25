import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { CountComponent } from './count/count.component';
import { MonthcountComponent } from './monthcount/monthcount.component';
import { YearcountComponent } from './yearcount/yearcount.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
const ROUTES: Routes = [
  // { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: '', component: AccountingComponent },
  { path: '#', component: AccountingComponent },
  {
    path: 'count', component: CountComponent, children: [
      // { path: '', redirectTo: '/count/year', pathMatch: 'prefix' },
      { path: '', component: YearcountComponent },
      { path: 'list', component: AccountlistComponent },
      { path: 'year', component: YearcountComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
