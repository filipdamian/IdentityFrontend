import { TestBed } from '@angular/core/testing';

import { WOTypeService } from './wotype.service';

describe('WOTypeService', () => {
  let service: WOTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WOTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
