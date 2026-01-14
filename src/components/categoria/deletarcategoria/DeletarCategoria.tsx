import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function DeletarCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId() {
        try {

            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId()
        }
    }, [id])

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/')
        }
    }, [token])


    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        setIsLoading(true);

        try {

            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token }
            })

            ToastAlerta('Categoria deletada com sucesso!', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao deletar a categoria!', 'erro')
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className='container w-full max-w-lg mx-auto px-4 pt-20 md:pt-6 mt-24'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-emerald-800 font-bold'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-emerald-800 font-semibold'>
                Você tem certeza de que deseja apagar esta categoria?</p>

            <div className='border border-emerald-800 flex flex-col rounded-2xl overflow-hidden justify-between bg-emerald-50 '>
                
                <div className="flex flex-col gap-3 pl-6 py-4">
                    <p className="text-lg text-emerald-600 font-bold">{categoria.nome}</p>
                    <p className="text-lg text-emerald-800">{categoria.descricao}</p>
                    <p className="text-lg text-emerald-800"> {new Date(categoria.dataCriacao).toLocaleDateString("pt-BR")}</p>
                    <p className="text-lg text-emerald-800">{categoria.tipo}</p>
                </div>

                <div className="flex flex-row">
                    <button className='text-emerald-800 font-bold bg-orange-300 hover:bg-orange-400 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button className='w-full text-emerald-800 font-bold bg-emerald-500 hover:bg-emerald-700 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarCategoria}
                    >
                        {
                            isLoading ?
                                <ClipLoader
                                    color="#086f52"
                                    size={24}
                                />
                                :
                                <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div >
    )
}

export default DeletarCategoria