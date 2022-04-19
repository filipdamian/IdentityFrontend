import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypeScenarioStepListComponent } from './wo-type-scenario-step-list.component';

describe('WoTypeScenarioStepListComponent', () => {
  let component: WoTypeScenarioStepListComponent;
  let fixture: ComponentFixture<WoTypeScenarioStepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypeScenarioStepListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypeScenarioStepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
