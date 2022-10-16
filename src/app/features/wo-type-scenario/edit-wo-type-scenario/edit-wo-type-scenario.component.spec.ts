import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWoTypeScenarioComponent } from './edit-wo-type-scenario.component';

describe('EditWoTypeScenarioComponent', () => {
  let component: EditWoTypeScenarioComponent;
  let fixture: ComponentFixture<EditWoTypeScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWoTypeScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWoTypeScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
