import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConjCartas} from '../carta.model';

@Component({
  selector: 'app-carta-animacao',
  templateUrl: './carta-animacao.component.html',
  styleUrls: ['./carta-animacao.component.css'],
  animations: [
    trigger('cardFlip', [
      state('padrao', style({
        transform: 'none',
      })),
      state('virada', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('pareada', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('padrao => virada', [
        animate('400ms')
      ]),
      transition('virada => padrao', [
        animate('400ms')
      ]),
      transition('* => pareada', [
        animate('400ms')
      ])
    ])
  ]
})
export class CartaAnimacaoComponent implements OnInit {

  @Input() data: ConjCartas;

  @Output() cartaClicada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}