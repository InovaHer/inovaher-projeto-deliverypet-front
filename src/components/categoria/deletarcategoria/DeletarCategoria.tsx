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
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4 text-black">Deletar categoria</h1>
            <p className="text-center font-semibold mb-4 text-black">
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header
                    className="py-2 px-6 bg-white text-black font-bold text-2xl">
                    Categoria
                </header>
                <p className="p-8 text-3xl bg-white text-black">{categoria.nome}</p>
                <p className="p-8 text-3xl bg-white text-black">{categoria.descricao}</p>
                <p className="p-8 text-3xl bg-white text-black">{categoria.dataCriacao}</p>
                <p className="p-8 text-3xl bg-white text-black">{categoria.tipo}</p>
                <div className="flex">
                    <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button className="w-full text-slate-100 bg-blue-400 hover:bg-blue-700 flex items-center justify-center"
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
        </div>
    )
}

export default DeletarCategoria