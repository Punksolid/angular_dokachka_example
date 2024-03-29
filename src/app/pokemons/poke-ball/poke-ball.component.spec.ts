import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBallComponent } from './poke-ball.component';

describe('PokeBallComponent', () => {
  let component: PokeBallComponent;
  let fixture: ComponentFixture<PokeBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeBallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
