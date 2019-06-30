export class Usuario {
    id: number;
    nome: string;
    senha: string;
    email: string;
    qtdPontos: number;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.qtdPontos = 0;
    }
}
