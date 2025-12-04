import {
    ListIcon,
    ShoppingCartIcon,
    XIcon,
    SignOutIcon,
    TagIcon,
    InfoIcon
} from "@phosphor-icons/react";

import { useRef } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../navbar/SearchForm";
import ModalLogin from "../login/modallogin/ModalLogin";

type MenuState = 'closed' | 'open';

    interface NavbarProps {
    menuState: MenuState;
    onMenuToggle: () => void;
    onMenuClose: () => void;
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuToggle = (): void => {
        onMenuToggle();
    };

    const handleMenuClose = (): void => {
        onMenuClose();
    };

    return (
        <>
        {/* =================== NAVBAR DESKTOP =================== */}
        <div className="fixed top-0 left-0 z-50 w-full py-2 bg-green-600">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-lg text-white">

            {/* ---------- DIV 1 - LOGO ---------- */}
            <div className="flex items-center gap-3">
                <Link to="/home" className="flex items-center gap-2">
                <img
                    src="https://ik.imagekit.io/gocq6aosm/patas.png"
                    alt="Logo InovaPet"
                    className="w-12 md:w-14"
                />
                <span className="text-2xl font-extrabold tracking-wide text-indigo-900">
                    InovaPet
                </span>
                </Link>
            </div>

            {/* ---------- DIV 2 - SEARCH ---------- */}
            <div className="hidden md:flex w-2/5 justify-center text-black">
                <SearchForm />
            </div>

            {/* ---------- DIV 3 - BOTÕES + ÍCONES ---------- */}
            <div className="hidden md:flex items-center gap-8 font-extrabold justify-end">

                <Link to='/produtos' className='flex items-center gap-2 hover:underline'>
                <ShoppingCartIcon size={22} weight="bold" />
                Produtos
                </Link>

                <Link to='/categorias' className='flex items-center gap-2 hover:underline'>
                <TagIcon size={22} weight="bold" />
                Categorias
                </Link>

                <Link to='/sobre' className='flex items-center gap-2 hover:underline'>
                <InfoIcon size={22} weight="bold" />
                Sobre
                </Link>

                <ModalLogin />

                <Link to='/carrinho' className='hover:text-fuchsia-300 transition'>
                <ShoppingCartIcon size={28} weight='bold' />
                </Link>

                <Link
                to='/logout'
                className='hover:text-fuchsia-400 transition'
                title="Sair"
                >
                <SignOutIcon size={28} weight='bold' />
                </Link>
            </div>

            {/* ---------- BOTÃO MENU MOBILE ---------- */}
            <button
                className="md:hidden text-white"
                onClick={handleMenuToggle}
                aria-label="Abrir menu"
            >
                <ListIcon size={32} weight="bold" />
            </button>

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

                {/* <div className='flex gap-6 mt-6'>
                    <ModalLogin /> */}

                <div className='flex gap-6 mt-6'>
                    <ModalLogin />

                <Link to='/carrinho' onClick={handleMenuClose}>
                    <ShoppingCartIcon size={32} weight='bold' />
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