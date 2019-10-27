import { TestBed } from '@angular/core/testing';

import { MyBooksService } from './my-books.service';

describe('MyBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBooksService = TestBed.get(MyBooksService);
    expect(service).toBeTruthy();
  });
});
