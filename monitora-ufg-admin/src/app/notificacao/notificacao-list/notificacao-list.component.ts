import { Component, OnInit } from '@angular/core';
import { Notificacao, StatusNotificacao } from '../../core/models/notificacao';
import { MockupService } from '../../core/services/mockup.service';
import { CentroAula } from 'src/app/core/models/centro-aula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacao-list',
  templateUrl: './notificacao-list.component.html',
  styleUrls: ['./notificacao-list.component.css']
})
export class NotificacaoListComponent implements OnInit {

  public notificacoes: Notificacao[] = [];
  public centroAula: CentroAula;

  constructor(
    private service: MockupService,
    private route: Router
  ) { }

  ngOnInit() {
    this.centroAula = this.service.getOneCentroAulas(4);
    this.notificacoes = this.service.getAllNotificacoesPendentesDeUmLocal(this.centroAula);
  }

  openForm(index: number) {
    this.route.navigate(['avalia-notificacao', `${index}`]);
  }

  get statusNotificacao() {
    return StatusNotificacao;
  }
}
