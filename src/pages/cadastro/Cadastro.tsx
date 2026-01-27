
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";

function Cadastro() {
    const navigate = useNavigate();

    // Controlar a exibição do Loader (animação de carregamento)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Validar a digitação da senha do usuário
	const [confirmarSenha, setConfirmarSenha] = useState<string>("");
	const [senhaTocada, setSenhaTocada] = useState(false);


  const [usuario, setUsuario] = useState<Usuario>({
		id: 0,
		nome: "",
		usuario: "",
		senha: "",
		foto:""
    })

    useEffect( () => {
		if(usuario.id !== 0) {
			retornar();
		}
    }, [usuario])

    function retornar(){
		navigate("/");
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		})

    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      setIsLoading(true);
      
      if(confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
        try{
          await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
          ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");

        }catch(error){
          ToastAlerta("Erro ao cadastrar o usuário!", "erro");
        }
    }else{
        ToastAlerta("Dados do usuário inconsistentes! Verifique as informações do cadastro.", "info");
        setUsuario({
          ...usuario,
          senha: ""
        });
        setConfirmarSenha("");
    }
    setIsLoading(false);
    }

    console.log(JSON.stringify(usuario));
    console.log("Confirmar senha: " + confirmarSenha);

return (
    <>
	<div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold ">
			
		<div className="bg-[url('https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/lambeijos.png')] lg:block hidden bg-no-repeat 
                    w-full min-h-screen bg-cover bg-center"
				></div>
				<form className="form-emerald flex justify-center items-center flex-col w-2/3 gap-3 text-emerald-800 border-emerald-800 my-10"
					onSubmit={cadastrarNovoUsuario}
				>
					<h2 className="text-emerald-800 text-5xl">Cadastrar</h2>
						<div className="flex flex-col w-full">
						<label htmlFor="nome">Nome</label>
						<input
							type="text"
							id="nome"
							name="nome"
							placeholder="Nome"						
							value={usuario.nome}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="usuario">Usuario</label>
						<input
							type="text"
							id="usuario"
							name="usuario"
							placeholder="Usuario"
							value={usuario.usuario}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="foto">Foto</label>
						<input
							type="text"
							id="foto"
							name="foto"
							placeholder="Foto"
							value={usuario.foto}
							onFocus={() => setSenhaTocada(true)}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
												{senhaTocada && (
							<span className="text-gray-500 text-sm mt-1">
							Digite - URL da sua foto de perfil
							</span>
						)}
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							id="senha"
							name="senha"
							placeholder="Senha"
							value={usuario.senha}
							
							onFocus={() => setSenhaTocada(true)}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>

						{senhaTocada && (
							<span className="text-gray-500 text-sm mt-1">
							A senha deve ter no mínimo 8 caracteres
							</span>
						)}
						
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="confirmarSenha">Confirmar Senha</label>
						<input
							type="password"
							id="confirmarSenha"
							name="confirmarSenha"
							placeholder="Confirmar Senha"
							value={confirmarSenha}
							onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
						/>
					</div>
					<div className="flex justify-around w-full gap-8">
						<button
							type="reset"
							className="rounded text-emerald-800 bg-orange-300 hover:bg-orange-400 w-1/2 py-2"
							onClick={retornar}
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="rounded text-emerald-800 bg-emerald-500 hover:bg-emerald-600
                       		w-1/2 py-2 flex justify-center"
						>
							{
								isLoading ?

									<ClipLoader
										color="#ffffff"
										size={24}
									/>

								:

									<span>Cadastrar</span>

							}
							
						</button>
					</div>
				</form>
			</div>
    
    </>  
  )
}

export default Cadastro