import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationScreenComponent } from './certification-screen.component';

describe('CertificationScreenComponent', () => {
  let component: CertificationScreenComponent;
  let fixture: ComponentFixture<CertificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
