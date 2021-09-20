import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCertificatesScreenComponent } from './download-certificates-screen.component';

describe('DownloadCertificatesScreenComponent', () => {
  let component: DownloadCertificatesScreenComponent;
  let fixture: ComponentFixture<DownloadCertificatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCertificatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCertificatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
