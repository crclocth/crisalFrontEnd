import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateScreenComponent } from './certificate-screen.component';

describe('CertificateScreenComponent', () => {
  let component: CertificateScreenComponent;
  let fixture: ComponentFixture<CertificateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
