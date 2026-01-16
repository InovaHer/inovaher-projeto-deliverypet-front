import {
    ListIcon,
    ShoppingCartIcon,
    XIcon,
    SignOutIcon,
    TagIcon,
    InfoIcon
} from "@phosphor-icons/react";

import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "../navbar/SearchForm";
import ModalLogin from "../login/modallogin/ModalLogin";
import { CartContext } from "../../contexts/CardContext";
import { AuthContext } from "../../contexts/AuthContext";

type MenuState = 'closed' | 'open';

    interface NavbarProps {
    menuState: MenuState;
    onMenuToggle: () => void;
    onMenuClose: () => void;
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {
    
    const navigate = useNavigate();

    // Obtém a quantidade de itens do carrinho via context
    const { quantidadeItems } = useContext(CartContext)
    
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuToggle = (): void => {
        onMenuToggle();
    };

    const handleMenuClose = (): void => {
        onMenuClose();
    };
    
    // Deslogar o usuário
    const {handleLogout} = useContext(AuthContext);

    function logout(){
        handleLogout();
        navigate("/");
    }

    return (
        <>
        {/* =================== NAVBAR DESKTOP =================== */}
        {/* primeira linha */}
            <div className="flex justify-between mx-auto px-4 text-lg text-black bg-emerald-500 p-4">
                {/* max-w-7xl */}
            {/* ---------- DIV 1 - LOGO ---------- */}
            <div className="order-1 items-center">
                <Link to="/home" className="flex items-center gap-2">
                <img
                    src="https://ik.imagekit.io/gocq6aosm/patas.png"
                    alt="Logo InovaPet"
                    className="w-12 md:w-14 "
                />
                <span className="text-2xl font-extrabold tracking-wide text-emerald-800">
                    InovaPet
                </span>
                </Link>
            </div>

            {/* ---------- DIV 2 - SEARCH ---------- */}
            <div className="order-2 hidden gap md:flex w-2/5 justify-center text-black mx-25 ">
                <SearchForm />
            </div>

            {/* ---------- DIV 3 - BOTÕES + ÍCONES ---------- */}
            <div className="order-3 hidden md:flex items-center gap-8 font-extrabold justify-end">
                <ModalLogin />
                <Link to='/cart' className='text-emerald-800 hover:text-white transition'>
                <ShoppingCartIcon size={28} weight='bold'/>
                {quantidadeItems > 0 && (
                    <span className="absolute top-5 right-18 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {quantidadeItems}
                    </span>
                )}
                </Link>
                <Link to='' onClick={logout} className="text-emerald-800 hover:text-white transition">
                    <SignOutIcon size={28} weight='bold' />
                </Link>
            </div>

            {/* ---------- BOTÃO MENU MOBILE ---------- */}
            <button
                className=" txt-emerald-800 md:hidden text-white"
                onClick={handleMenuToggle}
                aria-label="Abrir menu"
            >
                <ListIcon size={32} weight="bold" />
            </button>

            </div>
        {/* SEGUNDA LINHA  */}
        <div className="flex justify-center  bg-orange-300">
            <div className="flex gap-20 ">
                <Link to='/produtos' className='flex text-emerald-800 hover:bg-orange-400 hover:text-emerald-800 rounded-md p-2 '>
                <ShoppingCartIcon size={22} weight="bold" />
                Produtos
                </Link>

                <Link to='/categorias' className='flex text-emerald-800 hover:bg-orange-400 hover:text-emerald-800 rounded-md p-2'>
                <TagIcon size={22} weight="bold" />
                Categorias
                </Link>

                <Link to='/sobre' className='flex text-emerald-800 hover:bg-orange-400 hover:text-emerald-800 rounded-md p-2'>
                <InfoIcon size={22} weight="bold" />
                Sobre
                </Link>
            </div>
        </div>
        

        {/* =================== MENU MOBILE =================== */}
        {menuState === 'open' && (
            <div
            ref={menuRef}
            className="fixed top-0 left-0 z-50 w-full h-full bg-slate-800 bg-opacity-95 md:hidden"
            >
            <div className="relative flex flex-col gap-2 p-6 text-lg text-white">

                {/* HEADER MOBILE */}
                <div className="flex items-center justify-between mb-2">
                <img
                    src="https://ik.imagekit.io/gocq6aosm/patas.png"
                    alt="Logo"
                    className='w-14'
                />

                <button
                    type="button"
                    aria-label="Fechar menu"
                    className="text-white hover:text-gray-300"
                    onClick={handleMenuClose}
                >
                    <XIcon size={32} weight="bold" />
                </button>
                </div>

                {/* SEARCH MOBILE */}
                <div className="mb-4 text-black">
                <SearchForm />
                </div>

                {/* LINKS MOBILE */}
                <Link to='/home' onClick={handleMenuClose} className="py-2 font-extrabold">
                Home
                </Link>

                <Link to='/produtos' onClick={handleMenuClose} className="flex items-center gap-2 py-2 font-extrabold">
                <ShoppingCartIcon size={22} weight="bold" />
                Produtos
                </Link>

                <Link to='/categorias' onClick={handleMenuClose} className="flex items-center gap-2 py-2 font-extrabold">
                <TagIcon size={22} weight="bold" />
                Categorias
                </Link>

                <Link to='/sobre' onClick={handleMenuClose} className="flex items-center gap-2 py-2 font-extrabold">
                <InfoIcon size={22} weight="bold" />
                Sobre
                </Link>

                <div className='flex gap-6 mt-6'>
                    <ModalLogin />

                <Link to='/cart' onClick={handleMenuClose}>
                    <ShoppingCartIcon size={32} weight='bold' />
                    {quantidadeItems > 0 && (
                    <span className="relative -top-9 -right-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {quantidadeItems}
                    </span>
                )}  
                </Link>

                <Link to='/logout' onClick={handleMenuClose}>
                    <SignOutIcon size={32} weight='bold' />
                </Link>
                </div>
            </div>
            </div>
        )}
        </>
    );
}

export default Navbar;