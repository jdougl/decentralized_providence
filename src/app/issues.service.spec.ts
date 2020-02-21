import { TestBed } from '@angular/core/testing';

import { IssuesService } from './issues.service';

describe('BugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsService = TestBed.get(BugsService);
    expect(service).toBeTruthy();
  });
});
