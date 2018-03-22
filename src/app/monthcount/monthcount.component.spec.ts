import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthcountComponent } from './monthcount.component';

describe('MonthcountComponent', () => {
  let component: MonthcountComponent;
  let fixture: ComponentFixture<MonthcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
