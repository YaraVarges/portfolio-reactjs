import React from "react";

const Card = ({ title, description, link, image }) => {
    return (
      <div className="bg-slate-950 shadow-lg border-2 border-red-400 rounded-lg p-6 hover:shadow-xl transition">
        <h3 className="text-2xl mb-5 font-bold text-white">{title}</h3>
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            className="w-full h-full object-cover" 
            src={image} 
            alt="Imagem do Projeto" 
          />
        </div>
        <p className="mt-2 text-white text-justify">{description}</p>
        <button className="h-10 px-6 mt-4 mb-2 font-semibold rounded-full bg-red-400 text-white">
          <a 
            className="hover:underline" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Acessar
          </a>
        </button>
      </div>
    );
};

export default Card;
