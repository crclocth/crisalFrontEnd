import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCertificationScreenComponent } from './list-certification-screen.component';

describe('ListCertificationScreenComponent', () => {
  let component: ListCertificationScreenComponent;
  let fixture: ComponentFixture<ListCertificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCertificationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCertificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
