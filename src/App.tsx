import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"

import { AuthProvider } from "./contexts/AuthContext"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Perfil from "./pages/perfil/Perfil"
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"
import ListaProdutos from "./components/produto/listaprodutos/ListaProdutos"

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          {/* <Navbar /> */}
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />

              <Route path="/cadastro" element={<Cadastro />} />


              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
            </Routes>
          </div>
          {/* <Footer/> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
