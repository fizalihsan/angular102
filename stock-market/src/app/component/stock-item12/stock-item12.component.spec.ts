import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem12Component } from './stock-item12.component';

describe('StockItem12Component', () => {
  let component: StockItem12Component;
  let fixture: ComponentFixture<StockItem12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
