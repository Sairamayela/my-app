import { TestBed } from '@angular/core/testing';

import { FormTask1Service } from './form-task1.service';

describe('FormTask1Service', () => {
  let service: FormTask1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTask1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
