import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaAnimacaoComponent } from './carta-animacao.component';

describe('CartaAnimacaoComponent', () => {
  let component: CartaAnimacaoComponent;
  let fixture: ComponentFixture<CartaAnimacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaAnimacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaAnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
