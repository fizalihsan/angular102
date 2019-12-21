import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockList2Component } from './stock-list2.component';

describe('StockList2Component', () => {
  let component: StockList2Component;
  let fixture: ComponentFixture<StockList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
