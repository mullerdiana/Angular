import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// ActivatedRoute é o pcacote que contem o snapshot que captura o id passado pela rota
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';


@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', {static:true})formTarefa: NgForm;
  tarefa:Tarefa;

  constructor(
    private tarefaService:TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // snapshot captura o id da rota
    // O "+" converte converte o id para o tipo numerico
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
  
  atualizar():void {
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      //Navigte faz o retorno para a rota
      this.router.navigate(['/tarefas']);
    }
  }

}
