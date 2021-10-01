import { Routes } from '@angular/router';
import { CadastrarLivroComponent } from './cadastrar';
import { ListarLivroComponent } from './listar';

export const LivroRoutes: Routes = [
    { 
        path:'livros',
        redirectTo: 'livros/listar'
    }, 
    { 
        path:'livros/listar',
        component: ListarLivroComponent
    },
    { 
        path: 'livros/cadastrar',
        component: CadastrarLivroComponent
    }
];