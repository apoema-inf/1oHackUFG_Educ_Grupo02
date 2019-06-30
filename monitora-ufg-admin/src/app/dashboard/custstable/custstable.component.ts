import { Component, OnInit } from '@angular/core';

export interface CustoPorCA {
  unidadeConsumidora: string;
  valorFatura: number;
  simboloReal: string;
  valorPorcentagem: number;
  status: string;
}
export interface  PeriodicElement  {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Janeiro/2018', weight: 335555.22, symbol: 'R$'},
  {position: 2, name: 'Fevereiro/2018', weight: 17884587.24, symbol: 'R$'},
  {position: 3, name: 'Março/2018', weight: 11724587.21, symbol: 'R$'},
  {position: 4, name: 'Maio/2018', weight: 12384587.24, symbol: 'R$'},
  {position: 5, name: 'Abril/2018', weight: 13884587.24, symbol: 'R$'},
  {position: 6, name: 'Junho/2018', weight: 11984227.24, symbol: 'R$'},
  {position: 8, name: 'Julho/2018', weight: 13884587.32, symbol: 'R$'},
  {position: 9, name: 'Agosto/2018', weight: 11884587.24, symbol: 'R$'},
  {position: 10, name: 'Setembro/2017', weight: 192123223.00, symbol: 'R$'},
  {position: 11, name: 'Outubro/2017', weight: 11921238.9984, symbol: 'R$'},
  {position: 11, name: 'Novembro/2017', weight: 11921238.17, symbol: 'R$'},
  {position: 12, name: 'Dezembro/2017', weight: 12345555.67, symbol: 'R$'},

];

const CUSTOPORCA: CustoPorCA[] = [
  {unidadeConsumidora: '10011744-CA-A' , valorFatura: 3120692.10, simboloReal: 'R$', valorPorcentagem: 26.26 , status: 'Auto'},
  { unidadeConsumidora: '10019322-CA-B', valorFatura: 1617931.66 , simboloReal: 'R$', valorPorcentagem: 13.61, status: 'Auto' },
  {unidadeConsumidora: '11232344-CA-C', valorFatura: 1607206.38, simboloReal: 'R$', valorPorcentagem: 6.75, status: 'Auto'},
  {unidadeConsumidora: '11056332-CA-D', valorFatura: 801985.68, simboloReal: 'R$', valorPorcentagem: 5.17, status: 'Auto'},
  {unidadeConsumidora: '11013422-CA-E', valorFatura: 457011.62, simboloReal: 'R$', valorPorcentagem: 3.85, status: 'Auto'},
  {unidadeConsumidora: '11032344-CA-IQ', valorFatura: 444098.98, simboloReal: 'R$', valorPorcentagem: 3.74, status: 'Auto'},
  {unidadeConsumidora: '11032344-Inf', valorFatura: 417468.39, simboloReal: 'R$', valorPorcentagem: 3.51, status: 'Auto'},
  {unidadeConsumidora: '24399234-IME', valorFatura: 290694.28, simboloReal: 'R$', valorPorcentagem: 3.28, status: 'Auto'},
  {unidadeConsumidora: '110245672-IF' , valorFatura: 247382.75, simboloReal: 'R$', valorPorcentagem: 2.50, status: 'Auto'},
  {unidadeConsumidora: '45432345-FACE', valorFatura: 226781.10, simboloReal: 'R$', valorPorcentagem: 2.45, status: 'Auto'},
  {unidadeConsumidora: '98732243-FE', valorFatura: 21004689, simboloReal: 'R$', valorPorcentagem: 2.08, status: 'Auto'},
  {unidadeConsumidora: '10032222-FD', valorFatura: 178124.42, simboloReal: 'R$', valorPorcentagem: 1.77, status: 'Auto'},
  {unidadeConsumidora: '10032222-FD', valorFatura: 178124.42, simboloReal: 'R$', valorPorcentagem: 1.50, status: 'Auto'},
];



@Component({
  selector: 'app-custstable',
  templateUrl: './custstable.component.html',
  styleUrls: ['./custstable.component.css']
})



export class CuststableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
