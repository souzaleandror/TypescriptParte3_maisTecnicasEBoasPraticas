import { Comparavel } from "../interfaces/comparavel.js";
import { Modelo } from "../interfaces/modelo.js";
import { Imprimivil } from "../utils/imprimivel.js";

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        //console.log(`Data: ${this.data} Quantidade: ${this.quantidade} Valor: ${this.valor}`);
        return `Data: ${this.data} Quantidade: ${this.quantidade} Valor: ${this.valor}`;
    }

    public ehIgual(negocicao: Negociacao): boolean {
        return this.data.getDate() === negocicao.data.getDate() && this.data.getMonth() === negocicao.data.getMonth() && this.data.getFullYear() === negocicao.data.getFullYear();
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}