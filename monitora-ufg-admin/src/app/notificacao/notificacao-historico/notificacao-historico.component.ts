import { Component, OnInit } from '@angular/core';
import { Notificacao, StatusNotificacao } from '../../core/models/notificacao';
import { CentroAula } from '../../core/models/centro-aula';
import { MockupService } from '../../core/services/mockup.service';

@Component({
  selector: 'app-notificacao-historico',
  templateUrl: './notificacao-historico.component.html',
  styleUrls: ['./notificacao-historico.component.css']
})
export class NotificacaoHistoricoComponent implements OnInit {

  public notificacoes: Notificacao[] = [];
  public centroAula: CentroAula;

  constructor(
    private service: MockupService,
  ) { }

  ngOnInit() {
    this.centroAula = this.service.getOneCentroAulas(4);
    this.notificacoes = this.service.getAllNotificacoesResolvidasDeLocal(this.centroAula);
  }

  get statusNotificacao() {
    return StatusNotificacao;
  }
}
