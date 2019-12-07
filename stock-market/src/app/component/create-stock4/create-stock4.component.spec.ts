import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStock4Component } from './create-stock4.component';

describe('CreateStock4Component', () => {
  let component: CreateStock4Component;
  let fixture: ComponentFixture<CreateStock4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStock4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStock4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
