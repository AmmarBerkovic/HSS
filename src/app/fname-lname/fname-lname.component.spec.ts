import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnameLnameomponent } from './fname-lname.component';

describe('FnameLnameComponent', () => {
  let component: FnameLnameomponent;
  let fixture: ComponentFixture<FnameLnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnameLnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnameLnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
