import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa} from '../shared';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];  //vem do model

  constructor(private tarefaService : TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
    //   new Tarefa(1, "Comprar ração dos dog", true),
    //   new Tarefa(2,"Lavar roupa", false)
    // ]
  }
  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o status da Tarefa"'+tarefa.nome+'"?')){ 
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas= this.listarTodos()
    } 
    else{
      this.tarefas= this.listarTodos()
    }
  }

  remover($event:any, tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm('Deseja remover a Tarefa"'+tarefa.nome+'"?')){ 
      this.tarefaService.remover(tarefa.id);
      this.tarefas= this.listarTodos()
    } 
  }

}
