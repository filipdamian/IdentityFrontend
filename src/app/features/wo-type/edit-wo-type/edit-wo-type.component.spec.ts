import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWoTypeComponent } from './edit-wo-type.component';

describe('EditWoTypeComponent', () => {
  let component: EditWoTypeComponent;
  let fixture: ComponentFixture<EditWoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWoTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
