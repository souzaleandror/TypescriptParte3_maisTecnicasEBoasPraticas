import { Imprimivil } from '../utils/imprimivel.js';
export class Negociacoes extends Imprimivil {
    constructor() {
        super(...arguments);
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes);
    }
}
