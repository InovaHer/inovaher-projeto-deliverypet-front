export function EmBreve() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-green-600 text-white rounded-3xl shadow-2xl p-10 flex flex-col sm:flex-row items-center gap-10">

                {/* Texto à esquerda */}
                <div className="flex flex-col gap-6 w-full sm:w-2/3">
                
                    <h2 className="text-7xl font-semibold drop-shadow-md text-white">
                        Em Breve
                    </h2>

                    <p className="text-4xl leading-relaxed font-semibold">
                        Próximas evoluções do InovaPet:
                    </p>

                    <div className="list-disc pl-6 text-white text-2xl leading-relaxed font-semibold flex flex-col gap-3">
                        <p>🤝 Integração com produtores.</p>
                        <p>📊 Implementação de tabela nutricional.</p>
                        <p>💳 Módulo de pagamento.</p>
                        <p>🚚 Módulo de entrega.</p>
                    </div>

                </div>

                {/* Imagem à direita */}
                <div className="w-full sm:w-1/3 flex justify-center">
                    <img
                        src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/embreve.png"
                        alt="Imagem Em Breve"
                        className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-slade-100"
                    />
                </div>
            </div>
        </section>
    );
}