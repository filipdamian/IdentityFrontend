import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypeScenarioListComponent } from './wo-type-scenario-list.component';

describe('WoTypeScenarioListComponent', () => {
  let component: WoTypeScenarioListComponent;
  let fixture: ComponentFixture<WoTypeScenarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypeScenarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypeScenarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
