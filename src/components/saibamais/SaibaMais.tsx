import { Link } from "react-router-dom"
import ComoFunciona from "../saibamais/comofunciona/ComoFunciona"
import GaleriaFotos from "./galeriafotos/GaleriaFotos"

function OQueEAlimentacaoNatural() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      
      <h2 className="
        mb-10 
        text-4xl md:text-5xl lg:text-6xl 
        font-extrabold 
        tracking-tight 
        text-indigo-800
      ">
        O que é alimentação natural?
      </h2>

      <p className="
        mb-8 
        text-lg md:text-2xl 
        font-semibold 
        justufy-center
        leading-relaxed 
        text-slate-700
      ">
          A alimentação natural para pets é baseada em alimentos frescos,
        preparados de forma balanceada para atender todas as necessidades
        nutricionais de cães e gatos. Diferente das rações industrializadas,
        ela utiliza ingredientes reais como carnes, legumes, verduras e grãos.
      </p>

      <p className="
        mb-10 
        text-lg md:text-2xl 
        font-semibold 
        justify-center
        leading-relaxed 
        text-slate-700
      ">
          Esse tipo de alimentação pode proporcionar mais energia, melhor
        digestão, pelagem mais bonita e fortalecimento do sistema imunológico.
      </p>

      {/* Como funciona */}
      <ComoFunciona />

      {/* Galeria */}
      <div className="mt-16">
        <GaleriaFotos />
      </div>

      {/* Botão final */}
      <div className="mt-16 text-center">
        <Link
          to="/depoimentos"
          className="
            inline-block
            rounded-full 
            bg-indigo-600 
            px-10 py-5 
            text-lg md:text-xl 
            font-extrabold 
            text-white 
            shadow-lg 
            transition-all
            hover:scale-105 
            hover:bg-indigo-700
          "
        >
          Conheça nossos clientes mais importantes 
        </Link>
      </div>

    </section>
  )
}

export default OQueEAlimentacaoNatural



