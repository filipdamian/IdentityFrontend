import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWoTypeScenarioStepComponent } from './edit-wo-type-scenario-step.component';

describe('EditWoTypeScenarioStepComponent', () => {
  let component: EditWoTypeScenarioStepComponent;
  let fixture: ComponentFixture<EditWoTypeScenarioStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWoTypeScenarioStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWoTypeScenarioStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
