import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import * as dayjs from 'dayjs';

import { NotificacaoFormComponent } from '../shared/notificacao/components/notificacao-form/notificacao-form.component';
import { MockupService } from 'src/app/services/mockup.service';
import { Recompensa } from '../models/recompens';
import { Usuario } from '../models/usuario';
import { Notificacao, StatusNotificacao } from '../models/notificacao';
import { Resgatado } from '../models/resgatado';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public recompensas: Recompensa[] = [];
  public usuario: Usuario;
  public notificacoes: Notificacao[] = [];

  public recompensasGanhas: Recompensa[] = [];
  public recompensasNaoAlcancadas: Recompensa[] = [];
  public min;
  public minDescricao;
  public max;
  public maxDescricao;

  public resgatados: Resgatado[] = [];

  constructor(
    public modalController: ModalController,
    private service: MockupService,
    public alertController: AlertController
  ) {
    this.usuario = this.service.usuarioLogado;
  }

    ngOnInit() {
      this.notificacoes = this.service.getAllNotificacoesDoUsuario();
      this.recompensas = this.service.getAllRecompensas();

      this.resgatados = this.service.getResgatados();
      this.service.emitterResgatados.subscribe(values => this.resgatados = values);

      this.calculaRecompensas();
    }

    confirmarResgate(index) {
      this.presentAlertConfirm(index);
    }

  async presentAlertConfirm(index) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: `Tem certeza que deseja resgatar <strong>${this.recompensasGanhas[index].nome}</strong>?' 😊`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Sim',
          handler: () => {
            const resgatado = this.recompensasGanhas[index] as Resgatado;
            this.service.resgataRecompensa(resgatado);
            this.calculaRecompensas();
          }
        }
      ]
    });

    await alert.present();
  }

  calculaRecompensas() {
    this.recompensasGanhas = [];
    this.recompensasNaoAlcancadas = [];

    this.recompensas.forEach(value => {
      (value.qtdPontos <= this.usuario.qtdPontos) ? this.recompensasGanhas.push(value) : this.recompensasNaoAlcancadas.push(value);
    });

    if (this.recompensasGanhas.length === 0) {
      this.min = 0;
      this.minDescricao = '';
      this.max = this.recompensasNaoAlcancadas[0].qtdPontos;
      this.maxDescricao = this.recompensasNaoAlcancadas[0].nome;
    } else  if (this.recompensasNaoAlcancadas.length === 0) {
      this.min = this.recompensasGanhas[this.recompensasGanhas.length - 2].qtdPontos;
      this.minDescricao = this.recompensasGanhas[this.recompensasGanhas.length - 2].nome;
      this.max = this.recompensasGanhas[this.recompensasGanhas.length - 1].qtdPontos;
      this.maxDescricao = this.recompensasGanhas[this.recompensasGanhas.length - 1].nome;
    } else {
      this.min = this.recompensasGanhas[this.recompensasGanhas.length - 1].qtdPontos;
      this.minDescricao = this.recompensasGanhas[this.recompensasGanhas.length - 1].nome;
      this.max = this.recompensasNaoAlcancadas[0].qtdPontos;
      this.maxDescricao = this.recompensasNaoAlcancadas[0].nome;
    }
  }

  calculaTempoEmAberto(index: number) {
    const notificacao = this.notificacoes[index];
    return this.calculaTempo(notificacao.dataCriacao);
  }

  calculaTempoResgate(index: number) {
    const resgatado = this.resgatados[index];
    return this.calculaTempo(resgatado.dataResgate);

  }

  private calculaTempo(data: Date) {
    const retorno = dayjs().diff(dayjs(data), 'minute');

    if (retorno < 60) {
      return `${retorno} minutos atrás`;
    } else if (retorno < 1440) {
      return `${(retorno / 60).toFixed(0)} horas atrás`; 
    } else {
      return `${dayjs().diff(dayjs(data), 'month')} meses atrás`;
    }
  }

  getColor(index: number) {
    const notificacao = this.notificacoes[index];

    switch (notificacao.status) {
      case StatusNotificacao.Aceita:
        return 'success';
      case StatusNotificacao.Recusada:
        return 'danger';
      default:
        return 'warning';
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificacaoFormComponent
    });
    return await modal.present();
  }

  get _StatusNotificacao() {
    return StatusNotificacao;
  }
}
