export class Recompensa {
    id: number;
    nome: string;
    parceiro: string;
    qtdPontos: number;
    recoValidade: Date;

    constructor(id: number, nome: string, qtdPontos: number) {
        this.id = id;
        this.nome = nome;
        this.qtdPontos = qtdPontos;
    }
}
