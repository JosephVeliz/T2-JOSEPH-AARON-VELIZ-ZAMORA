import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta04Component } from './pregunta04.component';

describe('Pregunta04Component', () => {
  let component: Pregunta04Component;
  let fixture: ComponentFixture<Pregunta04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pregunta04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
