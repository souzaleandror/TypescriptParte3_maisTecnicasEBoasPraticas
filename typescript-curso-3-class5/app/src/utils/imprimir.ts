import { Negociacao } from "../models/negociacao";
import { Imprimivil } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivil[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}