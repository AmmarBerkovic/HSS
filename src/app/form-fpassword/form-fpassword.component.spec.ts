import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFpasswordComponent } from './form-fpassword.component';

describe('FormFpasswordComponent', () => {
  let component: FormFpasswordComponent;
  let fixture: ComponentFixture<FormFpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
