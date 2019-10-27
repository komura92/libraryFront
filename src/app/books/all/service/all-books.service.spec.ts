import { TestBed } from '@angular/core/testing';

import { AllBooksService } from './all-books.service';

describe('AllBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllBooksService = TestBed.get(AllBooksService);
    expect(service).toBeTruthy();
  });
});
