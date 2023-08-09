import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs'; //rxjs é uma biblioteca que trabalha com módulos funcionais

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiURL = environment.API_URL //traz o link da api da pasta environments

  constructor(private http: HttpClient) { } // dentro do constructor tem uma injeção de dependência. http é uma variável demonstrada pelo private e o HttpClient é o tipo dela, que é importada do angular e que lida com http.

  getCard(): Observable<any> {
    return this.http.get<any>(this.apiURL)
  } //função que retorna um Observable do tipo any. Observable é uma parte do Angular que fica observando alguma coisa acontecer. aí quem for consumí-lo, vai poder ver oq ele está observando. método get é um método de requisição de API, que no caso pega de uma URL
  
} // função que serve dados para outros lugares. 
