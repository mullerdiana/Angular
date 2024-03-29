import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ TarefaService,Tarefa} from '../shared';
import { Router} from "@angular/router";


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild ('formTarefa', {static:true}) formTarefa: NgForm; //vai permitir a validação - só autoriza envio de campos sem erro
  tarefa: Tarefa;
  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  // chamar o método cadastrar
  cadastrar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
