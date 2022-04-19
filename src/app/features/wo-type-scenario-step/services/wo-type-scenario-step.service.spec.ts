import { TestBed } from '@angular/core/testing';

import { WoTypeScenarioStepService } from './wo-type-scenario-step.service';

describe('WoTypeScenarioStepService', () => {
  let service: WoTypeScenarioStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoTypeScenarioStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
