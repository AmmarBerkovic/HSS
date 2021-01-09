import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnterCodeComponent } from './form-enter-code.component';

describe('FormEnterCodeComponent', () => {
  let component: FormEnterCodeComponent;
  let fixture: ComponentFixture<FormEnterCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnterCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
