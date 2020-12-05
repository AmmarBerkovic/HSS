import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailfieldsComponent } from './emailfields.component';

describe('EmailfieldsComponent', () => {
  let component: EmailfieldsComponent;
  let fixture: ComponentFixture<EmailfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailfieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
