import { CentroAula } from './centro-aula';

export class Tecnico {
    id: number;
    nome: string;
    login: string;
    senha: string;
    horaEntrada: Date;
    horaSaida: Date;
    centroAula: CentroAula;
}
