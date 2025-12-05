
import { useState } from "react"
import Stacks from "../Stacks"
import Modal from "./modalhero/ModalHero"

export default function HeroHome() {
    const [mostrarFrontend, setMostrarFrontend] = useState(false)
    const [mostrarBackend, setMostrarBackend] = useState(false)

    return (
        <section className="bg-white py-24 overflow-hidden">

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center bg-white rounded-2xl p-12 mx-auto">

            <h1 className="mb-6 text-2xl md:text-2xl xl:text-6xl font-extrabold text-indigo-700">
                Tecnologias utilizadas para desenvolver o projeto
            </h1>

            <p className="mb-10 text-xl md:text-2xl text-slate-700 font-semibold">
                ESTE PROJETO FOI DESENVOLVIDO UTILIZANDO AS SEGUINTES TECNOLOGIAS:
            </p>

            <div className="flex flex-col gap-5 sm:flex-row justify-center">

                {/* BOTÃO FRONTEND */}
                <button
                onClick={() => setMostrarFrontend(true)}
                className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700 hover:scale-105"
                >
                FRONTEND
                </button>

                {/* BOTÃO BACKEND */}
                <button
                onClick={() => setMostrarBackend(true)}
                className="rounded-xl border-2 border-indigo-600 px-8 py-4 text-lg font-bold text-indigo-600 hover:bg-indigo-700 hover:text-white hover:scale-105"
                >
                BACKEND
                </button>

            </div>

            </div>
        </div>

                {/* MODAL FRONTEND */}
        {mostrarFrontend && (
            <Modal onClose={() => setMostrarFrontend(false)}>
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
                Tecnologias Frontend
            </h2>

            <Stacks tipo="frontend" />
            </Modal>
        )}

        {/* MODAL BACKEND */}
        {mostrarBackend && (
            <Modal onClose={() => setMostrarBackend(false)}>
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
                Tecnologias Backend
            </h2>

            <Stacks tipo="backend" />
            </Modal>
        )}


        </section>
    )
}
