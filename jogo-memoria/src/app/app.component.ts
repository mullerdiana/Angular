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

  /**
   * array que recebe os nomes dos arquivos de imagem que devem ser implementadas no jogo
   */
  cartaImagens = [
    'card1.jpeg',
    'card2.jpeg',
    'card3.jpeg',
    'card4.jpeg',
    'card5.jpeg'
  ];

  /**
   * array de cartas
   * array de cartas viradas 
   * inicialização da contagem de cartas que fizeram par
   */
  cartas: ConjCartas[] = [];
  cartasViradas: ConjCartas[] = [];
  contagemPares: number = 0;


  /**
   * Faz o embaralhamento aleatório das cartas
   * @param anArray 
   * @returns 
   */

  embaralhaCartas(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])  //converte em uma matriz de array, iniciando com um número aleatório
      .sort((a, b) => a[0] - b[0])   //a-b, se der = 0 as cartas são iguais, então embaralha 
      .map(a => a[1]);
  }
   
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {  //no iniciar já faz a configuração das cartas
    this.configCartas();
  }

  configCartas(): void {
    this.cartas = [];
    this.cartaImagens.forEach((imagem) => {   //para cada imagem contida no array de imagens 
      const conjCartas: ConjCartas = {        //guarda o modelo na const conjCartas
        imgId: imagem,
        status: 'padrao'
      }

      this.cartas.push({ ...conjCartas });  // faz a entrada de cada imagem dentro do array cartas no formato do objeto
      this.cartas.push({ ...conjCartas });  // faz o mesmo no mesmo array, o "..." é um propagador
    });
    this.cartas = this.embaralhaCartas(this.cartas);
  }


  /**
   * No ato de click verifica se o status daquela carta era o padrão(virada para baixo) e se o
   *  numero de cartas viradas para cima não era maior que 1
   * então muda o status para virada e a inclui no array de cartasViradas (atingindo 2 não é possível virar mais cartas)
   * 
   * Quando o array de cartas viradas atinge 2 faz a verificação se são pares que
   * 
   * Ademais remove os itens do array cartas viradas - limpa o array para novas conferências
   * @param index 
   */
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
/**
 * Faz a conferencia das cartas viradas
 * Sendo iguais muda o status para pareada, se não voltam para o status padrão não(viradas para baixo)
 */
  confereCartaPareada(): void {
    setTimeout(() => {
      const cartaUm = this.cartasViradas[0];
      const cartaDois = this.cartasViradas[1];
      const proximoStatus = cartaUm.imgId === cartaDois.imgId ? 'pareada' : 'padrao';
      cartaUm.status = cartaDois.status = proximoStatus

      this.cartasViradas = [];

      if (proximoStatus === 'pareada') {
        this.contagemPares++;

        if (this.contagemPares === this.cartaImagens.length) {  //se o números de pares achados for do tamanho do número de imagens o jogo finaliza
          const dialogRef = this.dialog.open(RestartComponent, {  //abre caixa de diálogo de reiniciar o jogo
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }
    }, 1000);  //tempo de demora para que ocorra a virada
  }

  /**
   * Reinício de jogo reinicia a contagem de pares como 0 e faz a config das cartas(que chama o embaralhamento)
   */
  restart():void{
  this.contagemPares = 0;
  this.configCartas();
  }
}


