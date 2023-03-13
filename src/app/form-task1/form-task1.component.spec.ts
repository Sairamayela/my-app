import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTask1Component } from './form-task1.component';

describe('FormTask1Component', () => {
  let component: FormTask1Component;
  let fixture: ComponentFixture<FormTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTask1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
