import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function FormCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            const categoriaParaEnviar = {
                id: Number(id),
                nome: categoria.nome,
                descricao: categoria.descricao,
                tipo: categoria.tipo
            };

            try {

                await atualizar('/categorias', categoriaParaEnviar, setCategoria, {
                    headers: { Authorization: token }
                })
                ToastAlerta('A categoria foi atualizada com sucesso!', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a categoria!', 'erro')
                }
            }

        } else {
            // Cadastro

            try {

                await cadastrar('/categorias', categoria, setCategoria, {
                    headers: { Authorization: token }
                })
                ToastAlerta('A categoria foi cadastrada com sucesso!', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a categoria!', 'erro')
                }
            }
        }

        setIsLoading(false);
        retornar();

    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">{id === undefined ? 'Cadastrar' : 'Atualizar'} Categoria</h1>

            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name='nome'
                        className="border-2 border-black rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui a categoria"
                        name='descricao'
                        className="border-2 border-black rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Tipo da Categoria</label>
                    <input
                        type="text"
                        placeholder="Insira o tipo da categoria"
                        name='tipo'
                        className="border-2 border-black rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button className="rounded text-black bg-indigo-300
                                    hover:bg-indigo-600 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {
                        isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default FormCategoria;