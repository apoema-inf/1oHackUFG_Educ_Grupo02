import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusNotificacao, Notificacao } from '../../core/models/notificacao';
import { MockupService } from '../../core/services/mockup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-notificacao-form',
  templateUrl: './notificacao-form.component.html',
  styleUrls: ['./notificacao-form.component.css']
})
export class NotificacaoFormComponent implements OnInit, OnDestroy {

  public statusNotificacao: StatusNotificacao = null;
  private index;

  private inscricao: Subscription;
  public notificao: Notificacao;

  constructor(
    private service: MockupService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(params => {
      this.index = params.index;
      this.notificao = this.service.getAllNotificacoes[this.index];
    });
  }

  onClickSim() {
    this.statusNotificacao = StatusNotificacao.Aceita;
  }

  onClickNao() {
    this.statusNotificacao = StatusNotificacao.Recusada;
  }

  onClickRegistrar() {
    if (this.statusNotificacao === null) {
      alert('Selecione uma opção!');
      return;
    }

    if (this.statusNotificacao === StatusNotificacao.Aceita) {
      this.service.aprovaNotificacao(this.index);
    }

    if (this.statusNotificacao === StatusNotificacao.Recusada) {
      this.service.reprovaNotificacao(this.index);
    }

    this.router.navigate(['avalia-notificacao']);
  }

  ngOnDestroy() {
    if (!this.inscricao.closed) {
      this.inscricao.unsubscribe();
    }
  }

}
