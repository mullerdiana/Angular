import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{
  
  @Input() tarefaConcluida:boolean;  //mesmo nome do seletor por boa prática

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
