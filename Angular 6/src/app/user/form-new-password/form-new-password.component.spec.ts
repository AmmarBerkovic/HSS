import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPasswordComponent } from './form-new-password.component';

describe('FormNewPasswordComponent', () => {
  let component: FormNewPasswordComponent;
  let fixture: ComponentFixture<FormNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
