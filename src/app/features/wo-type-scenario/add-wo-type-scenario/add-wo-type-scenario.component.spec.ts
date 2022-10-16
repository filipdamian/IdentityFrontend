import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWoTypeScenarioComponent } from './add-wo-type-scenario.component';

describe('AddWoTypeScenarioComponent', () => {
  let component: AddWoTypeScenarioComponent;
  let fixture: ComponentFixture<AddWoTypeScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWoTypeScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWoTypeScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
