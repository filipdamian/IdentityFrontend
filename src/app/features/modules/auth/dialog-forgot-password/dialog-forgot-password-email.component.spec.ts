import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForgotPasswordEmailComponent } from './dialog-forgot-password-email.component';

describe('DialogForgotPasswordEmailComponent', () => {
  let component: DialogForgotPasswordEmailComponent;
  let fixture: ComponentFixture<DialogForgotPasswordEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForgotPasswordEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForgotPasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
