import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnterEmailComponent } from './form-enter-email.component';

describe('FormEnterEmailComponent', () => {
  let component: FormEnterEmailComponent;
  let fixture: ComponentFixture<FormEnterEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnterEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnterEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
