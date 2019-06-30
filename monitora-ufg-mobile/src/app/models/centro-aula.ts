export class CentroAula {
    id: number;
    descricao: string;
    longitude: number;
    latitude: number;
    raio: number;

    constructor(id: number, descricao: string) {
        this.id = id;
        this.descricao = descricao;
    }
}
