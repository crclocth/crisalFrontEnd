import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewScreenComponent } from './list-new-screen.component';

describe('ListNewScreenComponent', () => {
  let component: ListNewScreenComponent;
  let fixture: ComponentFixture<ListNewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
