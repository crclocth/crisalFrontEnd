import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyScreenComponent } from './list-company-screen.component';

describe('ListCompanyScreenComponent', () => {
  let component: ListCompanyScreenComponent;
  let fixture: ComponentFixture<ListCompanyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompanyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
