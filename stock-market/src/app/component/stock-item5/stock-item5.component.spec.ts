import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem5Component } from './stock-item5.component';

describe('StockItem5Component', () => {
  let component: StockItem5Component;
  let fixture: ComponentFixture<StockItem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
