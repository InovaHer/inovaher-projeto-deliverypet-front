import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import CardProduto from "../cardprodutos/CardProdutos";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import ModalProduto from "../modalproduto/ModalProdutos";

function ListaProdutos() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        buscarProdutos();
    }, []);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            await buscar('/produtos', setProdutos);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#312e81" size={32} />
                </div>
            )}

            <div className="flex justify-center mt-4 md:mt-6">
                <div className="container flex flex-col m-2 md:my-0">

                    {(!isLoading && produtos.length === 0) && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum Produto foi encontrado!
                        </span>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;
