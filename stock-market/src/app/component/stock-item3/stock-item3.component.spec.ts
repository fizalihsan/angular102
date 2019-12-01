import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem3Component } from './stock-item3.component';

describe('StockItem3Component', () => {
  let component: StockItem3Component;
  let fixture: ComponentFixture<StockItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
