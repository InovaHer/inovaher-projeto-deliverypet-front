import AlimentacaoNatural from "../../components/alimentacaonatural/AlimentacaoNatural";
import CarrosselDepoimentos from "../../components/carroseldepoimentos/CarroselDepoimentos";
import CarrosselInicio from "../../components/carrosselinicio/CarrosselInicio";
import CarrosselProdutos from "../../components/carrosselprodutos/CarrosselProdutos";

function Home() {
  return (
    <main>

      <CarrosselInicio />

      <div className="container mx-auto px-4">
        <CarrosselProdutos />
      </div>

      <CarrosselDepoimentos />

      <AlimentacaoNatural />

    </main>
  );
}

export default Home;
