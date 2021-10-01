import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService, Livro} from '../shared';
import { Router } from "@angular/router"; 


@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  @ViewChild ('formLivro', {static:true}) formLivro: NgForm;
  livro: Livro;

  constructor(private livroService:LivroService, private router: Router) { }

  ngOnInit(): void {
    this.livro = new Livro();
  }

  cadastrar():void{
    if(this.formLivro.form.valid){
      this.livroService.cadastrar(this.livro);
      this.router.navigate(["/livros"]);
    }
  }

}
