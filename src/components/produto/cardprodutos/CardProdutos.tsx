import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: Readonly<CardProdutoProps>) {
    return (
        <div className="flex flex-col justify-between my-4 sm:my-6 md:my-4 lg:my-10 overflow-hidden bg-indigo-300 rounded-lg">
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

            <div className="py-4 font-medium text-black">
                <img
                    src={produto.foto}
                    className="mx-auto mt-1 h-44 max-w-75"
                    alt={produto.nome}
                />

                <div className="p-4">
                    <p className="text-sm text-center uppercase">
                        {produto.nome}
                    </p>
                    <p className="text-sm text-center uppercase">
                        {produto.descricao}
                    </p>
                    <p className="text-sm text-center uppercase">
                        {produto.proteina}
                    </p>
                    <p className="text-sm text-center uppercase">
                        {produto.tipoPet}
                    </p>
                    <p className="text-sm text-center uppercase">
                        {produto.faixaEtaria}
                    </p>
                    <p className="text-sm text-center uppercase">
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
            <div className="flex flex-wrap">
                <button
                    className="flex items-center justify-center w-full py-2 font-medium text-white bg-indigo-400 hover:bg-indigo-700"
                >
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default CardProduto;