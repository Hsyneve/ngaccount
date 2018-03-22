import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcountComponent } from './yearcount.component';

describe('YearcountComponent', () => {
  let component: YearcountComponent;
  let fixture: ComponentFixture<YearcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
