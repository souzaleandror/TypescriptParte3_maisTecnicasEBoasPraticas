import { Imprimivil } from "../utils/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends Imprimivil, Comparavel<T> {

}