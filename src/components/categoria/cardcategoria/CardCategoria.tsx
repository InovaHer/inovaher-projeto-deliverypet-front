import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="bg-white rounded-2xl border border-indigo-200 shadow-md 
                flex flex-col overflow-hidden
                p-6 gap-4
                hover:shadow-xl transition-all duration-300">
            <header className="text-indigo-700 font-semibold text-2xl text-center">
                Categoria
            </header>

            <div className="flex flex-col gap-4 text-indigo-900">
                <p className="text-xl font-semibold text-center">{categoria.nome}</p>
                <p className="text-base font-semibold text-center text-indigo-800">{categoria.descricao}</p>
                <p className="text-base font-semibold text-center text-indigo-800">
                    {new Date(categoria.dataCriacao).toLocaleDateString('pt-BR')}</p>
                <p className="text-base font-semibold text-center text-indigo-800">{categoria.tipo}</p>

                <div className="flex gap-2 pt-4">
                    <Link to={`/editarcategoria/${categoria.id}`}
                        className='
                            w-1/2 text-white bg-indigo-500 hover:bg-indigo-700
                            flex items-center justify-center py-2
                            rounded-lg font-semibold transition
                        '>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarcategoria/${categoria.id}`} className='
                            w-1/2 text-white bg-fuchsia-500 hover:bg-fuchsia-700
                            flex items-center justify-center py-2
                            rounded-lg font-semibold transition
                        '>
                        <button>Deletar</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CardCategoria