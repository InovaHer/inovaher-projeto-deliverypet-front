import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

interface CardProdutoProps {
    produto: Produto
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {

    const { adicionarProduto } = useContext(CartContext);

    return (
        <div className=" bg-slate-100
                rounded-xl border border-indigo-300 shadow-md 
                flex flex-col overflow-hidden 
                p-5 gap-3
                hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-end justify-end pt-2 pr-2">
                <Link to={`/editarproduto/${produto.id}`}>
                    <PencilIcon
                        size={24}
                        className="mr-1 text-black hover:fill-teal-600"
                    />
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}>
                    <TrashIcon
                        size={24}
                        className="mr-1 text-black hover:fill-red-700"
                    />
                </Link>
            </div>

            <div className="flex flex-col items-center -mt-6">
                <img
                    src={produto.foto}
                    className="w-26 h-26 rounded-full object-cover border-2 border-indigo-400 shadow"
                    alt={produto.nome}
                />

                <div className="flex flex-col gap-2 text-indigo-900 font-semibold mt-5">
                    <p className="text-sm text-center uppercase">
                        {produto.nome}
                    </p>
                    <p className="text-sm text-center uppercase">
                        {produto.descricao}
                    </p>
                    <p className="text-sm text-center uppercase">
                        <span className="font-bold text-indigo-700">Proteína: </span>
                        {produto.proteina}
                    </p>
                    <p className="text-sm text-center uppercase">
                        <span className="font-bold text-indigo-700">Pet: </span>
                        {produto.tipoPet}
                    </p>
                    <p className="text-sm text-center uppercase">
                        <span className="font-bold text-indigo-700">Idade: </span>
                        {produto.faixaEtaria}
                    </p>
                    <p className="text-sm text-center uppercase">
                        <span className="font-bold text-indigo-700">Quantidade: </span>
                        {produto.quantidade}
                    </p>
                    <h3 className="text-xl font-bold text-center uppercase">
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(produto.preco)}
                    </h3>
                    <p className="text-sm italic text-center">
                        Categoria: {produto.categoria?.nome}
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="w-1/2 text-white bg-fuchsia-500 hover:bg-fuchsia-700 
        flex items-center justify-center py-2 rounded-xl font-semibold transition" onClick={() => adicionarProduto(produto)}
                >
                    Comprar
                </button>
            </div>

        </div>
    )
}

export default CardProdutos;