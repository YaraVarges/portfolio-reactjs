import React from "react";

const About = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center bg-slate-950 text-center md:flex-row">
        <div className="md:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-white xl:text-4xl">Sobre Mim</h2>
            <p className="mt-4 text-white text-justify xl:text-xl">Formada em Bacharel de Sistemas de Informação e Técnica em Informática pelo IFBA - Instituto Federal de Educação da Bahia, com experiência prática nas tecnologias de JavaScript, React JS, TypeScript e MySQL. Trabalho como Analista de Suporte e atualmente, estou focada em aprimorar meus conhecimentos desenvolvendo projetos significativos e relevantes. Expandir meu horizonte e me tornar uma desenvolvedora fullstack, unindo minha habilidade front-end com uma compreensão sólida do back-end.
            Ao longo do caminho, aprendi que a coragem é essencial, e isso me inspira diariamente. Como disse Neil Gaiman em "Coraline e o Mundo Secreto": "Quando você tem medo e faz mesmo assim, isso é coragem."</p>
        </div>
        <div className="md:w-1/2 xl:w-1/3 p-6">
            <div class="flex text-sm font-medium">
                <div class="flex-auto flex flex-col m-4">
                    <h2 className="text-2xl text-white mb-5">FrontEnd</h2>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    HTML
                    </button>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    CSS
                    </button>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    ReactJS
                    </button>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    JavaScript
                    </button>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    Angular
                    </button>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    Tailwind CSS
                    </button>
                </div>

                <div class="flex-auto flex flex-col m-4">
                    <h2 className="text-2xl text-white mb-5">BackEnd</h2>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    NodeJS
                    </button>
                </div>

                <div class="flex-auto flex flex-col m-4">
                    <h2 className="text-2xl text-white mb-5">Mobile</h2>
                    <button class="h-10 px-6 mb-2 font-semibold rounded-full bg-red-400 text-white" type="submit">
                    React Native
                    </button>
                </div>
            </div>
        </div>
        
        
        </section>
    );
};

export default About;