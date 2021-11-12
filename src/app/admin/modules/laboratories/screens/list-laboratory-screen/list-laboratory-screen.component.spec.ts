import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaboratoryScreenComponent } from './list-laboratory-screen.component';

describe('ListLaboratoryScreenComponent', () => {
  let component: ListLaboratoryScreenComponent;
  let fixture: ComponentFixture<ListLaboratoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLaboratoryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLaboratoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
