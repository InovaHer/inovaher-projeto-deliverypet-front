
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"
import ListaProdutos from "./components/produto/listaprodutos/ListaProdutos"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Perfil from "./pages/perfil/Perfil"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import SaibaMais from "./components/saibamais/SaibaMais"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/footer/Footer"
import { useState } from "react"
import Sobre from "./pages/sobre/Sobre"
import FormLogin from "./components/login/formlogin/FormLogin"
import DepoimentosPets from "./components/saibamais/depoimentos/DepoimentoPet"

type MenuState = 'closed' | 'open';

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed');

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  const closeMenu = (): void => {
    setMenuState('closed');
  };

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />
          <div className="mt-[80px] min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
              <Route path="/saibamais" element={<SaibaMais />} />
              <Route path="/listarprodutos" element={<ListaProdutos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/depoimentos" element={<DepoimentosPets />} />
              <Route path="/herostack" element={<Sobre />} />

            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
