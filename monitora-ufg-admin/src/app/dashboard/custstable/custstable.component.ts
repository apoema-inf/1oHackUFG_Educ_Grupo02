import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Janeiro', weight: 1.0079, symbol: 'R$'},
  {position: 2, name: 'Fevereiro', weight: 4.0026, symbol: 'R$'},
  {position: 3, name: 'Março', weight: 6.941, symbol: 'R$'},
  {position: 4, name: 'Maio', weight: 6.941, symbol: 'R$'},
  {position: 5, name: 'Abril', weight: 9.0122, symbol: 'R$'},
  {position: 6, name: 'Junho', weight: 10.811, symbol: 'R$'},
  {position: 8, name: 'Julho', weight: 12.0107, symbol: 'R$'},
  {position: 9, name: 'Agosto', weight: 14.0067, symbol: 'R$'},
  {position: 10, name: 'Setembro', weight: 15.9994, symbol: 'R$'},
  {position: 11, name: 'Outubro', weight: 18.9984, symbol: 'R$'},
  {position: 11, name: 'Novembro', weight: 20.1797, symbol: 'R$'},
  {position: 12, name: 'Dezembro', weight: 20.1797, symbol: 'R$'},

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
