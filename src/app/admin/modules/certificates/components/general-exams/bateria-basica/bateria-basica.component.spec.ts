import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriaBasicaComponent } from './bateria-basica.component';

describe('BateriaBasicaComponent', () => {
  let component: BateriaBasicaComponent;
  let fixture: ComponentFixture<BateriaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BateriaBasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
