import Hero from "../../components/hero/Hero"
import ListaProdutos from "../../components/produto/listaprodutos/ListaProdutos"

function Home() {
  return (
    <main className="pt-24">
      <Hero />

      
      <div className="py-2 md:py-0 md:mb-4">
        <ListaProdutos />
      </div>
    
    </main>
  )
}

export default Home
