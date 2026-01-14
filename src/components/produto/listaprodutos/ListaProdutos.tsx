import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardProduto from "../cardprodutos/CardProdutos";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import ModalProduto from "../modalproduto/ModalProdutos";

function ListaProdutos() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    async function buscarProdutos() {
        try {

            setIsLoading(true)

            await buscar('/produtos', setProdutos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="w-full border-t-4 border-emerald-600">
                <div className="grid grid-cols-3 items-center max-w-7xl mx-auto px-4 py-4 mt-24 ">

                    {/* Coluna esquerda (vazia só para balancear) */}
                    <div></div>

                    {/* Texto central */}
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-emerald-800">
                        Produtos
                    </h1>

                    {/* Botão à direita */}
                    <div className="flex justify-end mt-4">
                        <ModalProduto onSave={buscarProdutos} />
                    </div>

                </div>
            </div>
            
            {isLoading && (
                <div className="flex justify-center w-full my-8 mt-40">
                    <SyncLoader
                        color="#086f52"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && produtos.length === 0) && (
                        <span className="text-3xl text-center my-8 text-emerald-800">
                            Nenhum produto foi encontrado!
                        </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {
                            produtos.map((produto) => (
                                <CardProduto key={produto.id} produto={produto} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;