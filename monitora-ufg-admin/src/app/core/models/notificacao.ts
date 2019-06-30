import { Usuario } from './usuario';
import { CentroAula } from './centro-aula';

export enum StatusNotificacao {
    Aguardando = 0,
    Recusada,
    Aceita
}

export class Notificacao {
    id: number;
    sala: string;
    status: StatusNotificacao;
    relator: Usuario;
    centroAula: CentroAula;
    dataCriacao: Date;
    dataFechamento: Date;

    constructor(sala: string, relator: Usuario, centroAula: CentroAula, dataCriacao: Date = null) {
        this.sala = sala;
        this.relator = relator;
        this.centroAula = centroAula;
        this.status = StatusNotificacao.Aguardando;
        (dataCriacao) ? this.dataCriacao = dataCriacao : this.dataCriacao = new Date();
    }
}
