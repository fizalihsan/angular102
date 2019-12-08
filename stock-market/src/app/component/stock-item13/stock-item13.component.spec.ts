import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem13Component } from './stock-item13.component';

describe('StockItem13Component', () => {
  let component: StockItem13Component;
  let fixture: ComponentFixture<StockItem13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
