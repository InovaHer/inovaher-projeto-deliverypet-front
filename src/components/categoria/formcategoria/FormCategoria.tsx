import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

interface FormCategoriaProps {
    close?: () => void;
    onSave?: () => void;
}

function FormCategoria({ close, onSave }: FormCategoriaProps) {

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
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id]);

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                const categoriaParaEnviar = {
                    id: Number(id),
                    nome: categoria.nome,
                    descricao: categoria.descricao,
                    tipo: categoria.tipo,
                };

                await atualizar("/categorias", categoriaParaEnviar, setCategoria, {
                    headers: { Authorization: token },
                });

                ToastAlerta("A categoria foi atualizada com sucesso!", "sucesso");
                navigate("/categorias");
            } else {
                await cadastrar("/categorias", categoria, setCategoria, {
                    headers: { Authorization: token },
                });

                ToastAlerta("A categoria foi cadastrada com sucesso!", "sucesso");
            }

            if (onSave) onSave();
            if (close) close();

        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            } else {
                ToastAlerta("Erro ao salvar a categoria!", "erro");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-4 md:my-0 px-4 py-12 mt-24">
            {/* BOTÃO FECHAR */}
            <button 
            onClick={close}
            className="absolute top-4 right-4 bg-emerald-500 text-emerald-800 px-4 py-2 rounded-lg"
            >
            X
            </button>
            <h1 className="text-3xl md:text-4xl text-center mb-6 text-emerald-800 font-semibold mt-24">
                {id === undefined ? "Cadastrar" : "Atualizar"} Categoria
            </h1>

            <form className="w-full max-w-lg flex flex-col gap-4 text-emerald-800" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder=""
                        name="nome"
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50 text-base"
                        value={categoria.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder=""
                        name="descricao"
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50 text-base"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Tipo da Categoria</label>
                    <input
                        type="text"
                        placeholder=""
                        name="tipo"
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50 text-base"
                        value={categoria.tipo || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-emerald-800 font-bold bg-emerald-500 hover:bg-emerald-600 w-full py-2 mt-2 flex justify-center items-center text-base"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ClipLoader color="#086f52" size={24} />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;