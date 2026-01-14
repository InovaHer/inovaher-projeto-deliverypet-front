import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div
            className="
                bg-emerald-50 rounded-2xl border border-emerald-200 shadow-md
                flex flex-col h-full overflow-hidden
                p-6
                hover:shadow-xl transition-all duration-300
            "
        >
            {/* Conteúdo do card */}
            <div className="flex flex-col flex-1 gap-4 text-emerald-900">

                {/* Nome */}
                <p className="text-base font-semibold text-justify">
                    <b>Nome:</b> {categoria.nome}
                </p>

                {/* Descrição cresce para igualar os cards */}
                <p className="text-base font-semibold text-justify text-emerald-800 flex-1 min-h-[96px]">
                    <b>Descrição:</b> {categoria.descricao}
                </p>

                {/* Tipo */}
                <p className="text-base font-semibold text-justify text-emerald-800">
                    <b>Tipo:</b> {categoria.tipo}
                </p>

                {/* Ações fixas no rodapé */}
                <div className="flex gap-2 pt-4 mt-auto">
                    <Link
                        to={`/editarcategoria/${categoria.id}`}
                        className="
                            w-1/2 text-emerald-800 font-bold bg-emerald-500 hover:bg-emerald-600
                            flex items-center justify-center py-2
                            rounded-lg transition
                        "
                    >
                        Editar
                    </Link>

                    <Link
                        to={`/deletarcategoria/${categoria.id}`}
                        className="
                            w-1/2 text-emerald-800 font-bold bg-orange-300 hover:bg-orange-400
                            flex items-center justify-center py-2
                            rounded-lg transition
                        "
                    >
                        Deletar
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CardCategoria
