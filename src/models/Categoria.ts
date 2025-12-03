import type Produto from "./Produto";

export default interface Categoria {
    id: number | undefined;
    nome: string;
    descricao: string;
    dataCriacao: string;
    tipo: string;
    produto?: Produto[] | null;
}