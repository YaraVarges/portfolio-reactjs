import React from "react";
import Card from "../components/Card";
import Image from "../assets/img/profile.jpg";

const Projects = () => {
    const projects = [
        { title: "Votos & Versos", description: "Site do grupo musical Votos & Versos. Uma celebração da arte musical que combina votos de amor com versos envolventes. Divulgação de agenda, eventos e videos de perfomances.", link: "https://yaravarges.github.io/votoseversos-site/", image: "https://raw.githubusercontent.com/YaraVarges/portfolio/refs/heads/main/assets/images/site-votoseversos.png" },
        { title: "Rick and Morty Dex", description: "Projeto desenvolvido durante o curso da DIO. Um catálogo de personagens do multiverso Rick and Morty, explorando diversas características dos personagens.", link: "https://yaravarges.github.io/rick-morty/", image: "https://raw.githubusercontent.com/YaraVarges/portfolio/refs/heads/main/assets/images/site-rickandmorty.png" },
        { title: "Amicrochês", description: "Site AmiCrochês, sobre o universo dos amigurumis. Explora sobre pelúcias feitas à mão, onde cada ponto se transforma em personagens adoráveis e coloridos.", link: "https://yaravarges.github.io/amicroches-site/", image: "https://raw.githubusercontent.com/YaraVarges/portfolio/refs/heads/main/assets/images/site-amicroches.png" },
        { title: "Utilitários.com", description: "Site que inclui calculadoras para diversas necessidades, gerador de senhas robusto para manter suas contas seguras, criador de QR codes para facilitar o compartilhamento de informações.", link: "https://yaravarges.github.io/utilitarios.com/", image: "https://raw.githubusercontent.com/YaraVarges/portfolio/refs/heads/main/assets/images/site-gerador.png" },
        { title: "Portfolio HTML", description: "Portfolio similar em HTML, CSS e JavaScript.", link: "https://yaravarges.github.io/portfolio/", image: "https://raw.githubusercontent.com/YaraVarges/portfolio-reactjs/refs/heads/main/src/assets/img/portfolio.png" },
    ];

    return (
        <section className="min-h-screen bg-slate-950 p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Meus Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                <Card key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
