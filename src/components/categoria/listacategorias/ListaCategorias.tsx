import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

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
        buscarCategorias()
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

            {
                isLoading && (
                    <div className="flex justify-center w-full my-8">
                        <SyncLoader
                            color="#1e1b4b"
                            size={32}
                        />
                    </div>
                )
            }

            <div className="flex justify-center w-full my-4 ">
                <div className="container flex flex-col ">

                    {
                        (!isLoading && categorias.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhuma categoria foi encontrada!
                            </span>
                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
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