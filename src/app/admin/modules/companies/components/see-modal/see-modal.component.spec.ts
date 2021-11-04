import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeModalComponent } from './see-modal.component';

describe('SeeModalComponent', () => {
  let component: SeeModalComponent;
  let fixture: ComponentFixture<SeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
