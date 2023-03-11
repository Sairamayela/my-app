import { TestBed } from '@angular/core/testing';

import { CreatStudentService } from './creat-student.service';

describe('CreatStudentService', () => {
  let service: CreatStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
