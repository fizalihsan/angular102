import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem7Component } from './stock-item7.component';

describe('StockItem7Component', () => {
  let component: StockItem7Component;
  let fixture: ComponentFixture<StockItem7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
