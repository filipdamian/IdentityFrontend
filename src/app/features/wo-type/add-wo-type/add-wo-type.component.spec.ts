import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWoTypeComponent } from './add-wo-type.component';

describe('AddWoTypeComponent', () => {
  let component: AddWoTypeComponent;
  let fixture: ComponentFixture<AddWoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWoTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
