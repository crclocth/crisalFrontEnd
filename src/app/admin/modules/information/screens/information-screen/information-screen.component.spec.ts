import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationScreenComponent } from './information-screen.component';

describe('InformationScreenComponent', () => {
  let component: InformationScreenComponent;
  let fixture: ComponentFixture<InformationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
