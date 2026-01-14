import CarrosselDepoimentos from "../../components/carroseldepoimentos/CarroselDepoimentos"
import Hero from "../../components/hero/Hero"

import CarrosselInicio from "../../components/carrosselinicio/CarrosselInicio"
import CarrosselProdutos from "../../components/carrosselprodutos/CarrosselProdutos"


function Home() {
  return (
     <main className="pt-16">

      <div className="mb-8 md:mb-16">
        <CarrosselDepoimentos />
    <main className="pt-16">

      <div className="mb-8 md:mb-16">
        <CarrosselInicio />
      </div>

      <div className="container mx-auto px-4 py-8">
        <CarrosselProdutos />
      </div>

    </main>
  )
}

export default Home