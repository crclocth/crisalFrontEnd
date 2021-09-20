import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCertificatesScreenComponent } from './validate-certificates-screen.component';

describe('ValidateCertificatesScreenComponent', () => {
  let component: ValidateCertificatesScreenComponent;
  let fixture: ComponentFixture<ValidateCertificatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCertificatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCertificatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
