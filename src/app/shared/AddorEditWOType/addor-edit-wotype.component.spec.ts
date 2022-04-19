import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditWOTypeComponent } from './addor-edit-wotype.component';

describe('AddorEditWOTypeComponent', () => {
  let component: AddorEditWOTypeComponent;
  let fixture: ComponentFixture<AddorEditWOTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorEditWOTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorEditWOTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
