import { Injectable, EventEmitter } from '@angular/core';

import * as dayjs from 'dayjs';

import { Usuario } from '../models/usuario';
import { CentroAula } from '../models/centro-aula';
import { Notificacao, StatusNotificacao } from '../models/notificacao';
import { Recompensa } from '../models/recompens';
import { Resgatado } from '../models/resgatado';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  private usuario: Usuario = new Usuario(1, 'João', 'joao@mail.com');
  private centroAulas: CentroAula[];
  private notificacoes: Notificacao[];
  private recompensas: Recompensa[];
  private resgatados: Resgatado[] = [];

  public emitterNotificacoesAbertas: EventEmitter<Notificacao[]> = new EventEmitter();
  public emitterResgatados: EventEmitter<Recompensa[]> = new EventEmitter();

  constructor() {
    this.initCentroAulas();
    this.initNoticacoes();
    this.initRecompensas();

    this.usuario.qtdPontos = 40;
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

    return filter;
  }

  public getAllNotificacoesDoUsuario(): Notificacao[] {
    return this.notificacoes;
  }

  public getAllNotificacoesPendentesDeUmLocal(centroAula: CentroAula): Notificacao[] {
    const filter = this.notificacoes.filter(v => v.centroAula.id === centroAula.id && v.status === StatusNotificacao.Aguardando);
    return filter;
  }

  public getAllNotificacoesResolvidasDeLocal(centroAula: CentroAula): Notificacao[] {
    const filter = this.notificacoes.filter(v => v.centroAula.id === centroAula.id && v.status !== StatusNotificacao.Aguardando);
    return filter;
  }

  getAllNotificacoesResolvidas(): Notificacao[] {
      const filter = this.notificacoes.filter(v => v.status === StatusNotificacao.Aceita || v.status === StatusNotificacao.Recusada);
      return filter;
  }

  public getAllRecompensas(): Recompensa[] {
    return this.recompensas.sort((a, b) => a.qtdPontos - b.qtdPontos);
  }

  public resgataRecompensa(resgatado: Resgatado) {
    this.usuarioLogado.qtdPontos -= resgatado.qtdPontos;
    resgatado.dataResgate = new Date();

    this.resgatados.push(resgatado);
    this.emitterResgatados.emit(this.resgatados);
  }

  public getResgatados() {
    return this.resgatados;
  }

  public aprovaNotificacao(index: number) {
    const filter = this.filtraNotificacoesSemelhantes(this.notificacoes[index]);
    const dataAtual = new Date();
    filter.forEach(v => {
      v.status = StatusNotificacao.Aceita;
      v.dataFechamento = dataAtual;
    });
  }

  public reprovaNotificacao(index: number) {
    const filter = this.filtraNotificacoesSemelhantes(this.notificacoes[index]);
    const dataAtual = new Date();
    filter.forEach(v => {
      v.status = StatusNotificacao.Recusada;
      v.dataFechamento = dataAtual;
    });
  }

  private filtraNotificacoesSemelhantes(notificacao: Notificacao): Notificacao[] {
    return this.notificacoes.filter((v) => v.sala === notificacao.sala && v.centroAula.id === notificacao.centroAula.id);

  }

  insertNotificacao(sala: string, centroAula: CentroAula) {
    const notifcacao = new Notificacao(sala, this.usuarioLogado, centroAula, new Date());
    notifcacao.id = this.getAllNotificacoes.length;

    this.notificacoes.push(notifcacao);
    this.ordenaNotificacoes();
    this.emitterNotificacoesAbertas.emit(this.getNotificacoesEmAguardoDoUsuario());
  }

  private ordenaNotificacoes() {
    this.notificacoes = this.notificacoes.sort((a, b) => dayjs(b.dataCriacao).diff(a.dataCriacao, 'second'));
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
    // this.notificacoes.push(new Notificacao('101', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:00')));
    // this.notificacoes.push(new Notificacao('101', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:00')));
    // this.notificacoes.push(new Notificacao('201', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:20')));
    // this.notificacoes.push(new Notificacao('303', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 11:10')));
    this.notificacoes.push(new Notificacao('303', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 00:45')));
    this.notificacoes.push(new Notificacao('301', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 00:55')));
    this.notificacoes.push(new Notificacao('302', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 01:45')));
    this.notificacoes.push(new Notificacao('304', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 02:45')));
    this.notificacoes.push(new Notificacao('204', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 02:45')));
    this.notificacoes.push(new Notificacao('104', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 02:45')));
    this.notificacoes.push(new Notificacao('304', this.usuarioLogado, this.getOneCentroAulas(4), new Date('2019-06-30 02:45')));



    this.aprovaNotificacao(1);
    this.reprovaNotificacao(3);

    this.ordenaNotificacoes();
    this.emitterNotificacoesAbertas.emit(this.getNotificacoesEmAguardoDoUsuario());
  }

  private initRecompensas() {
    this.recompensas = [];
    this.recompensas.push(new Recompensa(1, 'Tirante Atlética X', 10));
    this.recompensas.push(new Recompensa(2, 'Caneta Atlética X', 20));
    this.recompensas.push(new Recompensa(3, 'Chaveiro', 5));
    this.recompensas.push(new Recompensa(4, 'Ingresso Chopada', 100));
  }
}
