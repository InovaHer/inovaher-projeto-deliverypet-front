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
        <div className='container w-full max-w-lg mx-auto px-4 pt-20 md:pt-6 '>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-fuchsia-700'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-fuchsia-700'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border border-indigo-300 flex flex-col rounded-2xl overflow-hidden justify-between bg-slate-100 '>
                <header
                    className='py-2 px-4 md:px-6 bg-green-700 text-white font-bold text-lg md:text-2xl'>
                    Categoria
                </header>

                <div className="flex flex-col gap-3 pl-6 py-4">
                    <p className="text-lg">{categoria.nome}</p>
                    <p className="text-lg">{categoria.descricao}</p>
                    <p className="text-lg"> {new Date(categoria.dataCriacao).toLocaleDateString("pt-BR")}</p>
                    <p className="text-lg">{categoria.tipo}</p>
                </div>

                <div className="flex flex-row">
                    <button className='text-slate-100  bg-fuchsia-500 hover:bg-fuchsia-700 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-700 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarCategoria}
                    >
                        {
                            isLoading ?
                                <ClipLoader
                                    color="#ffffff"
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