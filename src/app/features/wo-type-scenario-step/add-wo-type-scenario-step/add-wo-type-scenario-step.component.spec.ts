import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWoTypeScenarioStepComponent } from './add-wo-type-scenario-step.component';

describe('AddWoTypeScenarioStepComponent', () => {
  let component: AddWoTypeScenarioStepComponent;
  let fixture: ComponentFixture<AddWoTypeScenarioStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWoTypeScenarioStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWoTypeScenarioStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
