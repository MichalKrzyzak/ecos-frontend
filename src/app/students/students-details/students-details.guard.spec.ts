import { TestBed, async, inject } from '@angular/core/testing';

import { StudentsDetailsGuard } from './students-details.guard';

describe('StudentsDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsDetailsGuard]
    });
  });

  it('should ...', inject([StudentsDetailsGuard], (guard: StudentsDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
