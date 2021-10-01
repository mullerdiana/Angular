import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restart',  //seletor usado como tag html para fazer adição desse component específico no html geral
  templateUrl: './restart.component.html', 
  styleUrls: ['./restart.component.css']  //nomes usados para fazer a build da página com esse estilo
})
export class RestartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
