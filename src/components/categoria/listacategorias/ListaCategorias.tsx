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
    }, []);


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

            {
                isLoading && (
                    <div className="flex justify-center w-full my-8">
                        <SyncLoader
                            color="#4338CA"
                            size={32}
                        />
                    </div>
                )
            }

            <div className="flex justify-end w-full px-8 mt-8">
                <ModalCategoria onSave={buscarCategorias} />
            </div>

            <div className="flex justify-center w-full min-h-[calc(100vh-8rem)] overflow-x-hidden">
                <div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">

                    {
                        (!isLoading && categorias.length === 0) && (
                            <span className="my-8 text-2xl text-center md:text-3xl text-slate-700 md:my-16">
                                Nenhuma categoria foi encontrada!
                            </span>
                        )
                    }

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0" >
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