import { Component, OnInit } from '@angular/core';
import { Livro, LivroService } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})

export class ListarLivroComponent implements OnInit {

  livros: Livro[]

  constructor(private livroService: LivroService){} 

  ngOnInit() {
    this.livros = this.listarTodos();
 
  }
  listarTodos(): Livro[]{
    return this.livroService.listarTodos();
  }

  alterarDisponibilidade(livro:Livro):void{
    if(confirm('Deseja alterar a disponibilidade do livro"'+livro.titulo+'"?')){
      this.livroService.alterarDisponibilidade(livro.id);
      this.listarTodos();
  } 
}

  remover($event:any, livro:Livro):void{
    $event.preventDefault();  //não seria necessário se tirarmos o href da tag a no html, ou deixarmos ela vazia
    if(confirm('Deseja remover o Livro"'+livro.titulo+'"?')){ 
      this.livroService.remover(livro.id);
      this.livros= this.listarTodos()
  } 
  }

}