import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem4Component } from './stock-item4.component';

describe('StockItem4Component', () => {
  let component: StockItem4Component;
  let fixture: ComponentFixture<StockItem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
