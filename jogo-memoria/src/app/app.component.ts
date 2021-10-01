import { Component, OnInit } from '@angular/core';
import { ConjCartas } from './carta.model';
import { MatDialog } from '@angular/material/dialog';
import { RestartComponent } from './restart/restart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jogo da memória';

  cartaImagens = [
    'card1.jpeg',
    'card2.jpeg',
    'card3.jpeg',
    'card4.jpeg',
    'card5.jpeg'
  ];

  cartas: ConjCartas[] = [];
  cartasViradas: ConjCartas[] = [];
  contagemPares: number = 0;


  /**
   * Faz o embaralhamento aleatório das cartas
   * @param anArray 
   * @returns 
   */

  embaralhaCartas(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
   
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.configCartas();
  }

  configCartas(): void {
    this.cartas = [];
    this.cartaImagens.forEach((imagem) => {
      const conjCartas: ConjCartas = {
        imgId: imagem,
        status: 'padrao'
      }

      this.cartas.push({ ...conjCartas });
      this.cartas.push({ ...conjCartas });
    });
    this.cartas = this.embaralhaCartas(this.cartas);
  }

  cartaClicada(index: number): void {
    const cartaInfo = this.cartas[index];

    if (cartaInfo.status === 'padrao' && this.cartasViradas.length < 2) {
      cartaInfo.status = 'virada';
      this.cartasViradas.push(cartaInfo);

      if (this.cartasViradas.length > 1) {
        this.confereCartaPareada();
      }
    } else if (cartaInfo.status === 'virada') {
      cartaInfo.status = 'padrao';
      this.cartasViradas.pop();
    }
  }

  confereCartaPareada(): void {
    setTimeout(() => {
      const cartaUm = this.cartasViradas[0];
      const cartaDois = this.cartasViradas[1];
      const proximoStatus = cartaUm.imgId === cartaDois.imgId ? 'pareada' : 'padrao';
      cartaUm.status = cartaDois.status = proximoStatus

      this.cartasViradas = [];

      if (proximoStatus === 'pareada') {
        this.contagemPares++;

        if (this.contagemPares === this.cartaImagens.length) {
          const dialogRef = this.dialog.open(RestartComponent, {
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }
    }, 1000);
  }
  restart():void{
  this.contagemPares = 0;
  this.configCartas();
  }
}


