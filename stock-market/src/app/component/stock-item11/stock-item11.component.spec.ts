import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem11Component } from './stock-item11.component';

describe('StockItem11Component', () => {
  let component: StockItem11Component;
  let fixture: ComponentFixture<StockItem11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
