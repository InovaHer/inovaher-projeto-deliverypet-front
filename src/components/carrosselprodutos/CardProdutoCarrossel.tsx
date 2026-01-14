import { useContext } from 'react';
import type Produto from '../../models/Produto';
import { CartContext } from '../../contexts/CardContext';

interface CardProdutoCarrosselProps {
    produto: Produto;
}

function CardProdutoCarrossel({ produto }: Readonly<CardProdutoCarrosselProps>) {

    const { adicionarProduto } = useContext(CartContext);

    return (

        <div className="bg-emerald-50 rounded-xl border border-emerald-300 shadow-md 
                flex flex-col overflow-hidden p-5 gap-3
                hover:shadow-xl transition-all duration-300 h-full">

            {/* Área da Imagem e Informações */}
            <div className="flex flex-col items-center grow">

                <img
                    src={produto.foto}
                    className=" mx-auto w-40 md:w-44 aspect-square overflow-hidden rounded-2xl border border-emerald-300 bg-emerald-200"
                    alt={produto.nome}
                />

                <div className="flex flex-col gap-2 text-emerald-800 font-semibold mt-5 text-center grow ">
                    <p className="text-lg font-bold uppercase line-clamp-1">
                        {produto.nome}
                    </p>
                    <p className="text-sm text-emerald-600 leading-relaxed line-clamp-1">
                        {produto.descricao}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold text-emerald-600">Pet: </span>
                        {produto.tipoPet}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold text-emerald-600">Idade: </span>
                        {produto.faixaEtaria}
                    </p>
                    <div className="mt-auto">
                        <h3 className="text-xl font-bold mt-2">
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(produto.preco)}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-auto pt-4">
                <button
                    className="w-full text-emerald-800 bg-emerald-500 hover:bg-emerald-600 
                    flex items-center justify-center py-2 rounded-xl font-semibold transition"
                    onClick={() => adicionarProduto(produto)}
                >
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default CardProdutoCarrossel;