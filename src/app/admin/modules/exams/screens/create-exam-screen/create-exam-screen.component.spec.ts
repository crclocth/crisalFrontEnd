import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamScreenComponent } from './create-exam-screen.component';

describe('CreateExamScreenComponent', () => {
  let component: CreateExamScreenComponent;
  let fixture: ComponentFixture<CreateExamScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
