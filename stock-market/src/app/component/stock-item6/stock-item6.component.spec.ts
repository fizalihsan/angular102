import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem6Component } from './stock-item6.component';

describe('StockItem6Component', () => {
  let component: StockItem6Component;
  let fixture: ComponentFixture<StockItem6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
