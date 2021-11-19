import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertificateComponent } from './card-certificate.component';

describe('CardCertificateComponent', () => {
  let component: CardCertificateComponent;
  let fixture: ComponentFixture<CardCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
