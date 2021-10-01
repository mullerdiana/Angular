import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, //aqui informamos os modulos criados
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
