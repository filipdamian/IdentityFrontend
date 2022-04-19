import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTypesListComponent } from './wo-types-list.component';

describe('WoTypesListComponent', () => {
  let component: WoTypesListComponent;
  let fixture: ComponentFixture<WoTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
