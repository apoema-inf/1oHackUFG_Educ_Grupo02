import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import * as dayjs from 'dayjs';

import { NotificacaoFormComponent } from '../shared/notificacao/components/notificacao-form/notificacao-form.component';
import { MockupService } from 'src/app/services/mockup.service';
import { Notificacao } from '../models/notificacao';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public notificacoesPendentes: Notificacao[] = [];
  public usuario: Usuario;

  constructor(
    public modalController: ModalController,
    private service: MockupService
  ) {}

  ngOnInit() {
    this.usuario = this.service.usuarioLogado;
    this.notificacoesPendentes = this.service.getNotificacoesEmAguardoDoUsuario();
    this.service.emitterNotificacoesAbertas.subscribe(values => {this.notificacoesPendentes = values; console.log('Values', values); });


  }

  calculaTempoEmAberto(index: number) {
    const notificacao = this.notificacoesPendentes[index];
    const retorno = dayjs().diff(dayjs(notificacao.dataCriacao), 'minute');

    if (retorno >= 60 || retorno <= -60) {
      return `${(retorno / 60).toFixed(0)} horas atrás`;
    }

    return `${retorno} minutos atrás`;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificacaoFormComponent
    });
    return await modal.present();
  }
}
