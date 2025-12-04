import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import CardProduto from "../cardprodutos/CardProdutos";
import type Produto from "../../../models/Produto";

function ListaProdutos() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        buscarProdutos()
    }, [])


    async function buscarProdutos() {
        try {
            setIsLoading(true)

            await buscar('/produtos', setProdutos)

        } catch (error: any) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#1e1b4b"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && produtos.length === 0) && (
                        <span className="text-3xl text-center my-8">
                            Nenhum Produto foi encontrado!
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