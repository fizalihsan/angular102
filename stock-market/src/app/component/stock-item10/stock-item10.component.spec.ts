import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem10Component } from './stock-item10.component';

describe('StockItem10Component', () => {
  let component: StockItem10Component;
  let fixture: ComponentFixture<StockItem10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
