import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeModelPrivateComponent } from './see-model-private.component';

describe('SeeModelPrivateComponent', () => {
  let component: SeeModelPrivateComponent;
  let fixture: ComponentFixture<SeeModelPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeModelPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeModelPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
