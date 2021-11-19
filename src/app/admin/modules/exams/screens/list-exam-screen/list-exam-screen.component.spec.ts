import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExamScreenComponent } from './list-exam-screen.component';

describe('ListExamScreenComponent', () => {
  let component: ListExamScreenComponent;
  let fixture: ComponentFixture<ListExamScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExamScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExamScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
