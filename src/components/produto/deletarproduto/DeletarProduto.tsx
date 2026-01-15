import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import type Produto from "../../../models/Produto"
import { AuthContext } from "../../../contexts/AuthContext"

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Produto apagado com sucesso!', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar o produto.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-20 md:pt-6 mt-24'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-emerald-800 font-bold'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4 text-base md:text-lg text-emerald-800'>
                Você tem certeza de que deseja apagar este produto?
            </p>

            <div className='border border-emerald-300 flex flex-col rounded-2xl overflow-hidden justify-between bg-emerald-50 '>

                <div className="flex justify-center my-2">
                    <img
                        src={produto.foto}
                        className="w-40 md:w-44 aspect-square rounded-2xl
                        border border-emerald-300 bg-emerald-200
                        mt-2"
                        alt={produto.nome}
                    />
                </div>

                <div className="flex flex-col gap-2 pl-6 text-emerald-800 my-2">
                    <p><strong>Nome: </strong>{produto.nome}</p>
                    <p><strong>Descrição: </strong>{produto.descricao}</p>
                    <p><strong>Proteína: </strong>{produto.proteina}</p>
                    <p><strong>Tipo do Pet: </strong>{produto.tipoPet}</p>
                    <p><strong>Faixa Etária: </strong>{produto.faixaEtaria}</p>
                    <p><strong>Quantidade: </strong>{produto.quantidade}</p>
                    <p><strong>Valor: </strong>R$ {produto.preco}</p>
                </div>
                <div className="flex flex-row">
                    <button
                        className='text-emerald-800  bg-orange-300 hover:bg-orange-400 w-full py-2 text-base md:text-lg'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-emerald-800 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarProduto}>

                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto;