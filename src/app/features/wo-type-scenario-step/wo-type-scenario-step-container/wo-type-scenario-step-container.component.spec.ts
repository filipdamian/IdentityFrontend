import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypeScenarioStepContainerComponent } from './wo-type-scenario-step-container.component';

describe('WoTypeScenarioStepContainerComponent', () => {
  let component: WoTypeScenarioStepContainerComponent;
  let fixture: ComponentFixture<WoTypeScenarioStepContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypeScenarioStepContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypeScenarioStepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
