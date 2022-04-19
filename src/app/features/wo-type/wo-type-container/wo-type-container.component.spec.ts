import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypeContainerComponent } from './wo-type-container.component';

describe('WoTypeContainerComponent', () => {
  let component: WoTypeContainerComponent;
  let fixture: ComponentFixture<WoTypeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
