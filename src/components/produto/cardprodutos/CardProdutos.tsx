import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CardContext'

interface CardProdutoProps {
    produto: Produto
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {

    const { adicionarProduto } = useContext(CartContext)

    return (
        <div
            className="
                bg-emerald-50 rounded-2xl border border-emerald-300 shadow-md
                flex flex-col h-full overflow-hidden
                p-5
                hover:shadow-lg hover:scale-[1.01] transition-all duration-300
            "
        >
            {/* Ícones (fixos no topo) */}
            <div className="flex justify-end gap-2">
                <Link to={`/editarproduto/${produto.id}`}>
                    <PencilIcon
                        size={22}
                        className="text-black hover:fill-teal-600"
                    />
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}>
                    <TrashIcon
                        size={22}
                        className="text-black hover:fill-red-700"
                    />
                </Link>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col flex-1 items-center">

                {/* Imagem */}
                <img
                    src={produto.foto}
                    className="
                        w-40 md:w-44 aspect-square rounded-2xl
                        border border-emerald-300 bg-emerald-200
                        mt-2
                    "
                    alt={produto.nome}
                />

                {/* Informações */}
                <div className="flex flex-col flex-1 gap-2 text-emerald-800 font-semibold mt-5 w-full">

                    <p className="text-sm text-justify uppercase">
                        <b>Nome:</b> {produto.nome}
                    </p>

                    {/* Descrição cresce para igualar altura */}
                    <p className="text-sm text-justify uppercase flex-1 min-h-[96px]">
                        <b>Descrição:</b> {produto.descricao}
                    </p>

                    <p className="text-sm text-justify uppercase">
                        <b>Tipo de Proteína:</b> {produto.proteina}
                    </p>

                    <p className="text-sm text-justify uppercase">
                        <b>Tipo de Pet:</b> {produto.tipoPet}
                    </p>

                    <p className="text-sm text-justify uppercase">
                        <b>Idade:</b> {produto.faixaEtaria}
                    </p>

                    <p className="text-sm text-justify uppercase">
                        <b>Quantidade:</b> {produto.quantidade}
                    </p>

                    <p className="text-sm italic text-justify">
                        <b>Categoria:</b> {produto.categoria?.nome}
                    </p>

                    <h3 className="text-xl font-bold text-center uppercase mt-2">
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(produto.preco)}
                    </h3>

                </div>
            </div>

            {/* Botão fixo no rodapé */}
            <div className="mt-auto flex justify-center pt-4">
                <button
                    onClick={() => adicionarProduto(produto)}
                    className="
                        w-1/2 text-emerald-800 font-bold
                        bg-emerald-500 hover:bg-emerald-600
                        flex items-center justify-center py-2
                        rounded-xl transition
                    "
                >
                    Comprar
                </button>
            </div>

        </div>
    )
}

export default CardProdutos
