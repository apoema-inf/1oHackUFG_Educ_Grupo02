import { Recompensa } from './recompens';

export class Resgatado extends Recompensa {
    dataResgate: Date;

    constructor(id: number, nome: string, qtdPontos: number) {
        super(id, nome, qtdPontos);

        this.dataResgate = new Date();
    }
}