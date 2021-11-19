import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModelPrivateComponent } from './delete-model-private.component';

describe('DeleteModelPrivateComponent', () => {
  let component: DeleteModelPrivateComponent;
  let fixture: ComponentFixture<DeleteModelPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModelPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModelPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
