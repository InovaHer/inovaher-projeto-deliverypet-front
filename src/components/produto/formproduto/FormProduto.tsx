import { useState, useContext, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '', dataCriacao: '', tipo: '', })

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Produto atualizado com sucesso!', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar o Produto!', 'erro')
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Produto cadastrado com sucesso!', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar o Produto!', 'erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-4 md:my-0 px-4 py-12 bg-white">
            <h1 className="text-3xl md:text-4xl text-center mb-6 text-indigo-700 font-semibold">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="w-full max-w-lg flex flex-col gap-4 text-indigo-800 font-semibold max-h-[75vh] overflow-y-auto p-2"
                onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Insira aqui o nome do Produto"
                        name="nome"
                        required
                        className="border-2 border-indigo-300 rounded p-2 bg-indigo-50"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição do Produto</label>
                    <input
                        type="text"
                        placeholder="Insira aqui a descrição do Produto"
                        name="descricao"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Preço do Produto</label>
                    <input
                        value={
                            produto.preco === 0 || produto.preco === undefined ? "" : produto.preco
                        }
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        step=".01"
                        placeholder="Adicione aqui o preço do Produto"
                        name="preco"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Foto do Produto</label>
                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui a foto do Produto"
                        name="foto"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Quantidade</label>
                    <input
                        type="number"
                        placeholder="Insira aqui a quantidade do Produto"
                        name="quantidade"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                        value={produto.quantidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Proteína</label>
                    <input
                        type="text"
                        placeholder="Insira aqui a proteína do Produto"
                        name="proteina"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                        value={produto.proteina}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Tipo do Pet</label>
                    <input
                        type="text"
                        placeholder="O seu pet é um cachorro ou gato?"
                        name="tipoPet"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                        value={produto.tipoPet}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Faixa Etária do Pet</label>
                    <input
                        type="text"
                        placeholder="O seu pet é filhote, adulto ou senior?"
                        name="faixaEtaria"
                        required
                        className="border-2 border-indigo-300 bg-indigo-50 rounded p-2"
                        value={produto.faixaEtaria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border-2 p-2 border-indigo-300 bg-indigo-50 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>

                        {categorias.map((categoria) => (

                            <>
                                <option value={categoria.id}>{categoria.nome}</option>
                            </>
                        ))}


                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded text-white bg-indigo-500 hover:bg-indigo-700 w-full py-2 mt-2 flex justify-center items-center text-base font-semibold'
                    disabled={carregandoCategoria}
                >
                    {isLoading ?
                        <ClipLoader
                            color="#ffffff"
                            size={24}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormProduto;