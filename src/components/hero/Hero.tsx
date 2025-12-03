export default function HeroHome() {
  return (
    <section className="bg--slate-200 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* TEXTO */}
          <div className="text-center md:text-left">

            <h1 className="mb-6 text-4xl font-bold leading-tight text-indigo-600 md:text-5xl">
              Cuidado e carinho  
              <br className="hidden md:block" />
              para seu melhor amigo
            </h1>

            <p className="mb-8 text-lg text-indigo-600">
              Encontre aqui tudo que seu pet precisa: rações, brinquedos,
              acessórios e entrega rápida na sua casa.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">

              <a
                href="/produtos"
                className="rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-md transition hover:bg-indigo-700 textlg-bold"
              >
                Conheça Mais
              </a>

              <a
                href="/cadastro"
                className="rounded-xl border border-slade-300 px-6 py-3 text-slade-700 shadow-sm transition hover:bg-slade-100"
              >
                Nossos Produtos
              </a>

            </div>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/gocq6aosm/dog%20prato%20frutas.jpg"
              alt="Cachorro feliz"
              className="w-full max-w-md rounded-2xl shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
