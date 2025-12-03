import type Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    quantidade: number;
    proteina: string;
    tipoPet: string;
    faixaEtaria: string;
    categoria: Categoria | null;
}