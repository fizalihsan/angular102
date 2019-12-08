import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem9Component } from './stock-item9.component';

describe('StockItem9Component', () => {
  let component: StockItem9Component;
  let fixture: ComponentFixture<StockItem9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
