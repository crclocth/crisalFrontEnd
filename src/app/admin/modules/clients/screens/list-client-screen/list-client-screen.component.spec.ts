import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientScreenComponent } from './list-client-screen.component';

describe('ListClientScreenComponent', () => {
  let component: ListClientScreenComponent;
  let fixture: ComponentFixture<ListClientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
