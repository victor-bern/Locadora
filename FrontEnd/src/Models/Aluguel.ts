import Cliente from "./Cliente";
import Filme from "./Filme";

export default interface Aluguel {
    id?: number,
    Cliente: Cliente,
    Filme: Filme,
    DataAluguel?: string,
    DataDevolucao?: string
}