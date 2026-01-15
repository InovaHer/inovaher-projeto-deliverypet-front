import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { SyncLoader } from "react-spinners";
import type Produto from "../../models/Produto";
import { ToastAlerta } from "../../utils/ToastAlerta";

import "swiper/css";

import CardProdutoCarrossel from "./CardProdutoCarrossel";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";

function CarrosselProdutos() {
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsAuthenticated(token !== "");
    }, [token]);

    useEffect(() => {
        if (isAuthenticated) {
            buscarProdutos();
        }

    }, [isAuthenticated]);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            setError(null);

            await buscar("/produtos", setProdutos, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            console.error("Erro ao carregar produtos:", error);

            if (error?.toString?.().includes("401")) {
                ToastAlerta("Sessão expirada, faça login novamente!", "info");
                handleLogout();
            } else {
                setError("Não foi possível carregar os produtos.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function scrollPrev() {
        swiperInstance?.slidePrev();
    }

    function scrollNext() {
        swiperInstance?.slideNext();
    }

    if (!isAuthenticated) return null;

    if (isLoading) {
        return (
            <div className="flex justify-center w-full my-8">
                <SyncLoader color="#50C878" size={32} />
            </div>
        );
    }

    if (error) {
        return (
            <span className="text-3xl text-center my-8 block text-red-500">
                {error}
            </span>
        );
    }

    if (produtos.length === 0) {
        return (
            <span className="text-3xl text-center my-8 block">
                Nenhum Produto foi encontrado!
            </span>
        );
    }

    const produtosVisiveis = produtos.slice(0, 22);

    return (
        <div className="w-full px-4 py-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4 w-full whitespace-normal wrap-break-word">
                Produtos em Destaque
            </h2>

            <div className="relative w-full group">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="overflow-hidden"
                >
                    {produtosVisiveis.map((produto) => (
                        <SwiperSlide key={produto.id}>
                            <CardProdutoCarrossel produto={produto} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botão Anterior */}
                <button
                    type="button"
                    className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 absolute -left-12 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-20 group-hover:opacity-100 bg-transparent hover:bg-transparent"
                    onClick={scrollPrev}
                    aria-label="Slide anterior"
                >
                    <CaretLeftIcon
                        size={48}
                        className="text-emerald-800 fill-emerald-800 drop-shadow-xl"
                    />
                </button>

                {/* Botão Próximo */}
                <button
                    type="button"
                    className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 absolute -right-12 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-20 group-hover:opacity-100 bg-transparent hover:bg-transparent"
                    onClick={scrollNext}
                    aria-label="Próximo slide"
                >
                    <CaretRightIcon
                        size={48}
                        className="text-emerald-800 fill-emerald-800 drop-shadow-xl"
                    />
                </button>
            </div>
        </div>
    );
}

export default CarrosselProdutos;
