import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyScreenComponent } from './company-screen.component';

describe('CompanyScreenComponent', () => {
  let component: CompanyScreenComponent;
  let fixture: ComponentFixture<CompanyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
