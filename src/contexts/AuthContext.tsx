
import type UsuarioLogin from "../models/UsuarioLogin";
import { createContext, useRef, useState } from "react";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogout: () => void
    handleLogin: (usuarioLogin: UsuarioLogin) => void
    isLoading: boolean
    isLogout: boolean
}

interface AuthProviderProps{
    // qualquer componente react pode utilizar
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: AuthProviderProps){

//inicializa o estado do usuário (guardar dados do usuario autenticado)
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })
    //inicializa o estado de carregamento(loading)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //UseRefh - para saber se o logout foi forçado ou não
    const isLogout=useRef(false)//Imune a renderização


    //função para logar o usuário
    async function handleLogin(usuarioLogin: UsuarioLogin){
        setIsLoading(true);
        try{
            //chamar o serviço de login
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta('Usuário logado com sucesso!', 'sucesso');
            isLogout.current=false
        }catch(error){
            ToastAlerta('Erro ao logar o usuário! Verifique as credenciais.', 'erro');
        }
        setIsLoading(false);
    }
    
    function handleLogout() {

    // se não estiver logado, não faz nada
    if (!usuario.token) return;

    isLogout.current = true;

    setUsuario({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });

    ToastAlerta('Usuário deslogado com sucesso!', 'sucesso');
}


    return(
        <AuthContext.Provider value={{usuario, handleLogout, handleLogin, isLoading, isLogout: isLogout.current}}>
            {children}
        </AuthContext.Provider>
    )
}