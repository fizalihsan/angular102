import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem8Component } from './stock-item8.component';

describe('StockItem8Component', () => {
  let component: StockItem8Component;
  let fixture: ComponentFixture<StockItem8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
