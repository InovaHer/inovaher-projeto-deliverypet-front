import { Link } from "react-router-dom"

export default function HeroHome() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* TEXTO */}
          <div className="text-center md:text-left">

            <h1 className="
              mb-6 
              text-5xl md:text-6xl xl:text-7xl 
              font-extrabold 
              leading-tight 
              tracking-tight
              text-indigo-700
            ">
              Cuidado e carinho  
              <br className="hidden md:block" />
              para seu melhor amigo
            </h1>

            <p className="
              mb-10 
              text-xl md:text-2xl 
              text-slate-700 
              leading-relaxed
            ">
              Encontre aqui tudo que seu pet precisa: rações, brinquedos,
              acessórios e entrega rápida na sua casa.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:justify-center md:justify-start">

              <Link
                to="/saibamais"
                className="
                  rounded-xl 
                  bg-indigo-600 
                  px-8 py-4 
                  text-lg 
                  font-bold 
                  text-white 
                  shadow-lg 
                  transition 
                  hover:bg-indigo-700 
                  hover:scale-105
                "
              >
                Saiba mais
              </Link>

              <a
                href="/listarprodutos"
                className="
                  rounded-xl 
                  border-2 border-indigo-600 
                  px-8 py-4 
                  text-lg 
                  font-bold 
                  text-indigo-600 
                  shadow-sm 
                  transition 
                  hover:bg-indigo-50
                  hover:scale-105
                "
              >
                Nossos Produtos
              </a>

            </div>
          </div>

          {/* IMAGEM ESTILIZADA */}
          <div className="relative flex justify-center">
            
            {/* Fundo decorativo */}
            <div className="
              absolute 
              -z-10 
              h-80 w-80 md:h-[420px] md:w-[420px] 
              rounded-full 
              bg-linear-to-tr 
              from-indigo-500/40 
              to-fuchsia-400/30 
              blur-3xl
            "/>

            <img
              src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/foto%20principal.jpg"
              alt="nossos pets"
              className="
                w-full 
                max-w-xl md:max-w-2xl 
                rounded-3xl 
                shadow-2xl
                ring-4 ring-indigo-200
                transition
                hover:scale-105
                hover:rotate-1
              "
            />
          </div>

        </div>

      </div>
    </section>
  )
}
