import { useState, useContext, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";

interface FormCategoriaProps {
    close?: () => void;
    onSave?: () => void;
}

function FormProduto({ close, onSave }: FormCategoriaProps) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();


    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: { Authorization: token }
            });

            if (produto.categoria) {
                setCategoria(produto.categoria);
            }

        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
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

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }
    }


    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token]);


    useEffect(() => {
        buscarCategorias();

        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto((prev) => ({
            ...prev,
            categoria: categoria
        }));
    }, [categoria]);


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
        e.preventDefault();
        setIsLoading(true);

        const produtoParaEnviar = {
            ...produto,
            categoria: categoria
        };

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produtoParaEnviar, setProduto, {
                    headers: { Authorization: token },
                });

                ToastAlerta("Produto atualizado com sucesso!", "sucesso");

            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o Produto!", "erro");
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, produtoParaEnviar, setProduto, {
                    headers: { Authorization: token },
                });

                ToastAlerta("Produto cadastrado com sucesso!", "sucesso");

            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o Produto!", "erro");
                }
            }
        }

        setIsLoading(false);

        if (onSave) onSave();
        if (close) return close();

        retornar();
    }


    const carregandoCategoria = !categoria || !categoria.nome;


    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

  <div className="
    relative bg-white
    w-full max-w-xl
    max-h-[90vh]
    rounded-2xl
    overflow-hidden
    shadow-xl
    flex flex-col
  ">

    {/* BOTÃO FECHAR */}
    <button
      onClick={close}
      className="absolute top-4 right-4 bg-emerald-500 text-emerald-800 px-3 py-1 rounded-lg z-10"
    >
      X
    </button>

    {/* CONTEÚDO COM SCROLL */}
    <div className="overflow-y-auto px-6 py-6">

      <h1 className="text-3xl md:text-4xl text-center mb-6 text-emerald-800 font-semibold">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form
        className="w-full flex flex-col gap-4 text-emerald-800 font-semibold"
        onSubmit={gerarNovoProduto}
      >

                <div className="flex flex-col gap-2">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do produto"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Preço</label>
                    <input
                        type="number"
                        step=".01"
                        name="preco"
                        placeholder="Preço"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.preco ?? ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Foto (URL)</label>
                    <input
                        type="text"
                        name="foto"
                        placeholder="URL da foto"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.foto || ""}
                        onChange={atualizarEstado}
                    />
                </div>

               <div className="flex flex-col gap-2">
                <label>Quantidade</label>
                    <input
                        type="number"
                        name="quantidade"
                        placeholder="Quantidade"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.quantidade || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Proteína</label>
                    <input
                        type="text"
                        name="proteina"
                        placeholder="Proteína"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.proteina || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Tipo de Pet</label>
                    <input
                        type="text"
                        name="tipoPet"
                        placeholder="Cachorro ou Gato"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.tipoPet || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Faixa Etária</label>
                    <input
                        type="text"
                        name="faixaEtaria"
                        placeholder="Filhote, Adulto, Sênior"
                        required
                        className="border-2 border-emerald-800 rounded p-2 bg-emerald-50"
                        value={produto.faixaEtaria || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className="border p-2 border-emerald-600 rounded bg-emerald-50"
                        value={categoria.id || ""}
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" disabled>Selecione uma Categoria</option>

                        {categorias.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nome}
                            </option>
                        ))}

                    </select>
                </div>

                <button
                    type="submit"
                    disabled={carregandoCategoria}
                    className="rounded text-emerald-800 bg-emerald-500 hover:bg-emerald-600 w-full py-2 mt-2 flex justify-center items-center text-base font-semibold"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>

            </form>
        </div>
        </div>
    </div>
    );
}

export default FormProduto;