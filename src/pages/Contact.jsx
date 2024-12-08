import React from "react";

const Contact = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <form
                action="https://formsubmit.co/varges98@gmail.com"
                method="POST"
                className="p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                {/* Nome */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>
                
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Mensagem */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    ></textarea>
                </div>

                {/* Botão Enviar */}
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                    Enviar
                </button>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
                <input type="hidden" name="_next" value="http://localhost:3000/contact" />

            </form>
        </section>
    );
};

export default Contact;
