import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem2Component } from './stock-item2.component';

describe('StockItem2Component', () => {
  let component: StockItem2Component;
  let fixture: ComponentFixture<StockItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
