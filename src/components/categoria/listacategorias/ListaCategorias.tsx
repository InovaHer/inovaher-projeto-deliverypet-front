import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import ModalCategoria from "../modalcategoria/ModalCategoria";


function ListaCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/')
        }
    }, [token])
    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);


    async function buscarCategorias() {
        try {

            setIsLoading(true);

            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-full border-t-4 border-emerald-600">
                <div className="grid grid-cols-3 items-center max-w-7xl mx-auto px-4 py-4">

                    {/* Coluna esquerda (vazia só para balancear) */}
                    <div></div>

                    {/* Texto central */}
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-emerald-800">
                        Categorias
                    </h1>

                    {/* Botão à direita */}
                    <div className="flex justify-end mt-4">
                        <ModalCategoria onSave={buscarCategorias} />
                    </div>

                </div>
            </div>
            {
                isLoading && (
                    <div className="flex justify-center w-full my-8 mt-40">
                        <SyncLoader
                            color="#086f52"
                            size={32}
                        />
                    </div>
                )
            }


            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    {
                        (!isLoading && categorias.length === 0) && (
                            <span className="text-3xl text-center my-8 text-emerald-800">
                                Nenhuma categoria foi encontrada!
                            </span>
                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {
                            categorias.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            ))
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;