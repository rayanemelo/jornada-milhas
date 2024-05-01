import { TestBed } from '@angular/core/testing';

import { FormSearchService } from './form-search.service';

describe('FormSearchService', () => {
  let service: FormSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
