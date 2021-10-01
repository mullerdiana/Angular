import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivroComponent } from './listar/listar-livro.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarLivroComponent } from './cadastrar/cadastrar-livro.component';


@NgModule({
  declarations: [
    ListarLivroComponent,
    CadastrarLivroComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule
  ],
  providers:[
    LivroService
  ]
})
export class LivrosModule { }
