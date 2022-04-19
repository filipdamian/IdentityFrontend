import { TestBed } from '@angular/core/testing';

import { WoTypeScenarioService } from './wo-type-scenario.service';

describe('WoTypeScenarioService', () => {
  let service: WoTypeScenarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoTypeScenarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
