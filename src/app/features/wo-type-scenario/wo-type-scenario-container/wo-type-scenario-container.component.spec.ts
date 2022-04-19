import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypeScenarioContainerComponent } from './wo-type-scenario-container.component';

describe('WoTypeScenarioContainerComponent', () => {
  let component: WoTypeScenarioContainerComponent;
  let fixture: ComponentFixture<WoTypeScenarioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypeScenarioContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypeScenarioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
