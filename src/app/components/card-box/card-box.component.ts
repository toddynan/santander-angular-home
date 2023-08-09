import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit { //declarando uma hook OnInit que é executada sempre que acontece uma ação na aplicação

  constructor(private service: CardsService) {

  } //método de orientação a objetos. serve para dizer que este componente está sendo alimentado por aquele service

  accountData: AccountDataModel = {
    name: "",
    account: {
      agency: "0000",
      number: "00.000000-0"
    },
    card: {
      limit: 0,
      number: "0000"
    }
  };

  ngOnInit(): void {
    this.getAccountData();
  } // toda vez que o componente for iniciado, executa essa função, que é p chamar os dados da função getAccountData

  getAccountData() {
    this.service.getCard().subscribe( data => {
      this.accountData.name = data.name; // chama o name da API
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.card.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.split(" ")[3]; // pegando somente a última parte do número do cartão fornecido pela API
    }) // chama a propriedade do service que foi injetado no constructor. no caso o getCard. e p eu utilizar um conteúdo do Observable, preciso me inscrever nele pelo subscribe. aí todos os dados que o Observable retornar vão ser feitos dentro de uma variável, no caso a variável data, que é uma arrow function.

  } // função que vai chamar o service

}
