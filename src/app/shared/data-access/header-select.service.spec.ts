import { TestBed } from '@angular/core/testing';

import { HeaderSelectService } from './header-select.service';

describe('HeaderSelectService', () => {
  let service: HeaderSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
