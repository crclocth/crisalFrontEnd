import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCertificatesScreenComponent } from './list-certificates-screen.component';

describe('ListCertificatesScreenComponent', () => {
  let component: ListCertificatesScreenComponent;
  let fixture: ComponentFixture<ListCertificatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCertificatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCertificatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
