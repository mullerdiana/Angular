import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConjCartas} from '../carta.model';



@Component({
  selector: 'app-carta-animacao',
  templateUrl: './carta-animacao.component.html',
  styleUrls: ['./carta-animacao.component.css'],
  animations: [
    trigger('cardFlip', [ //property binding que verifica e muda o status da carta no momento de clicar
      state('padrao', style({   //sendo o status padrão não muda o status
        transform: 'none',
      })),
      state('virada', style({  //estando virada desencadeia ação css a seguir
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('pareada', style({ //ocorrendo o pareamento altera o status de visibilidade e diminui
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('padrao => virada', [  //tempo de de mudança de um status para outro
        animate('400ms')
      ]),
      transition('virada => padrao', [  //tempode de mudança de um status para outro
        animate('400ms')
      ]),
      transition('* => pareada', [ //tempode de mudança de um status para outro
        animate('400ms')
      ])
    ])
  ]
})
export class CartaAnimacaoComponent implements OnInit {

  @Input() data: ConjCartas;  //data é do tipo da interface ConjCartas

  @Output() cartaClicada = new EventEmitter(); //cartaClicada recebe um novo evento, que é chamdo no html

  constructor() { }

  ngOnInit(): void {
  }

}