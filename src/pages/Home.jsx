import React from "react";
import ImagePerfil from "../assets/img/profile.jpg";

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-slate-950 text-center md:text-left p-4">
            <div className="md:w-1/2 p-6">
                <h1 className="text-4xl font-bold text-white">Olá, sou Yara Varges</h1>
                <p className="text-sm text-red-400 mt-1 mb-8">B.el Information System | Support Analyst | Developer</p>
                <p className="mt-4 text-lg text-justify text-white">
                    Desenvolvedora cativada pela criação de experiências digitais. Acredito que o crescimento vem da coragem de enfrentar desafios, e é isso que me motiva a buscar constantemente projetos que me desafiem a crescer e evoluir.
                </p>

                <div className="flex flex-row mt-8">
                    <div className="pr-7">
                        <a href="https://www.instagram.com/yara.varges/" target="_blank" rel="noopener noreferrer">
                        <svg class="h-8 w-8 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                    </div>
                    <div className="pr-7">
                        <a href="https://www.linkedin.com/in/yara-varges-523887144/" target="_blank" rel="noopener noreferrer">
                        <svg class="h-8 w-8 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>
                    <div className="pr-7">
                        <a href="https://github.com/YaraVarges" target="_blank" rel="noopener noreferrer">
                        <svg class="h-8 w-8 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            

            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <img className="w-80 h-80 shadow rounded-full" src={ImagePerfil} alt="Imagem de Perfil" title="Imagem de Perfil Yara" />
            </div>
        </section>
    );
};

export default Home;