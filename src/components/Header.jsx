import React from "react";

const Header = () => {
    return (
        <header className="bg-slate-900 text-red-400 p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">YV</h1>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">Sobre mim</a></li>
            <li><a href="/projects" className="hover:text-white">Projetos</a></li>
            <li><a href="/contact" className="hover:text-white">Contato</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;