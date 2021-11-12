import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranAlturaGeograficaComponent } from './gran-altura-geografica.component';

describe('GranAlturaGeograficaComponent', () => {
  let component: GranAlturaGeograficaComponent;
  let fixture: ComponentFixture<GranAlturaGeograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranAlturaGeograficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranAlturaGeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
