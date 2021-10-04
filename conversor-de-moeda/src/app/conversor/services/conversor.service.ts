import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ConversorService {
  //passar o endereço que dá acesso às bases
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  
  
  constructor(private http: HttpClient) { }

  /**
   * Realizar a chamada para a API de conversão de moedas.
   *
   */

  converter(conversao: Conversao): Observable<any>{
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);
  }

  /**
   * Retornar a cotação para um dado de resposta (response)
   * @param conversaoResponse 
   * @param conversao 
   * @returns number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao):number{
    if(conversaoResponse ===undefined){
      return 0;  
    }
    return conversaoResponse.rates[conversao.moedaPara];
  }


  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao):string{
    if(conversaoResponse ===undefined){
      return '0';
    }
    return (1/conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse):string{
    if(conversaoResponse ===undefined){
      return '';
    }
    return conversaoResponse.date;
  }
  
}
