import { Injectable, EventEmitter } from '@angular/core';

import * as dayjs from 'dayjs';

import { Usuario } from '../models/usuario';
import { CentroAula } from '../models/centro-aula';
import { Notificacao, StatusNotificacao } from '../models/notificacao';
import { Recompensa } from '../models/recompens';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  private usuario: Usuario = new Usuario(1, 'João', 'joao@mail.com');
  private centroAulas: CentroAula[];
  private notificacoes: Notificacao[];
  private recompensas: Recompensa[];

  public emitterNotificacoesAbertas: EventEmitter<Notificacao[]> = new EventEmitter();

  constructor() {
    this.initCentroAulas();
    this.initNoticacoes();
    this.initRecompensas();

    this.usuario.qtdPontos = 20;
  }


  get usuarioLogado(): Usuario {
    return this.usuario;
  }

  getOneCentroAulas(id: number) {
    const filter = this.getAllCentroAulas.filter(v => v.id === id);

    if (filter.length === 0) {
      return null;
    }

    return filter[0];
  }

  get getAllCentroAulas(): CentroAula[] {
    return this.centroAulas;
  }

  get getAllNotificacoes(): Notificacao[] {
    return this.notificacoes;
  }

  public getNotificacoesEmAguardoDoUsuario(): Notificacao[] {
    const filter: Notificacao[] = this.notificacoes
      .filter(v => v.status === StatusNotificacao.Aguardando && v.relator.id === this.usuarioLogado.id);

    filter.sort((a, b) => dayjs(a.dataCriacao).isBefore(b.dataCriacao) ? -1 : 1);

    return filter;
  }

  insertNotificacao(sala: string, centroAula: CentroAula) {
    const notifcacao = new Notificacao(sala, this.usuarioLogado, centroAula, new Date());
    notifcacao.id = this.getAllNotificacoes.length;

    this.notificacoes.push(notifcacao);
    this.emitterNotificacoesAbertas.emit(this.getNotificacoesEmAguardoDoUsuario());
  }

  private initCentroAulas() {
    this.centroAulas = [];
    this.centroAulas.push(new CentroAula(1, 'Centro de Aulas A'));
    this.centroAulas.push(new CentroAula(2, 'Centro de Aulas B'));
    this.centroAulas.push(new CentroAula(3, 'Centro de Aulas C'));
    this.centroAulas.push(new CentroAula(4, 'Centro de Aulas D'));
  }

  private initNoticacoes() {
    this.notificacoes = [];
    this.getOneCentroAulas(2);
    this.notificacoes.push(new Notificacao('101', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:00')));
    this.notificacoes.push(new Notificacao('101', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:00')));
    this.notificacoes.push(new Notificacao('201', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:20')));
    this.notificacoes.push(new Notificacao('303', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:10')));
    this.notificacoes.push(new Notificacao('303', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 00:45')));


    this.emitterNotificacoesAbertas.emit(this.getNotificacoesEmAguardoDoUsuario());
  }

  private initRecompensas() {
    this.recompensas = [];
    this.recompensas.push(new Recompensa(1, 'Tirante Atlética X', 10));
    this.recompensas.push(new Recompensa(1, 'Caneta Atlética X', 20));
    this.recompensas.push(new Recompensa(1, 'Ingresso Chopada', 100));
  }
}
