import CarrosselDepoimentos from "../../components/carroseldepoimentos/CarroselDepoimentos"
import Hero from "../../components/hero/Hero"
import AlimentacaoNatural from "../../components/alimentacaonatural/AlimentacaoNatural"


function Home() {
  return (
     <main className="pt-16">

      <div className="mb-8 md:mb-16">
        <CarrosselDepoimentos />
      </div>

      <div className="mb-8 md:mb-16">
        <AlimentacaoNatural />
      </div>

    </main>
  )
}

export default Home