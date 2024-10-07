"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PlantasMedicinaisModernas() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const plantas = [
    {
      nome: "Camomila",
      nomeEspecifico: "Matricaria chamomilla",
      origem: "Europa e oeste da Ásia",
      doenca: "Ansiedade e insônia",
      preparo: "Infusão das flores secas em água quente por 5-10 minutos.",
      imagem: "/camomila.jpg",
    },
    {
      nome: "Aloe Vera",
      nomeEspecifico: "Aloe barbadensis miller",
      origem: "Península Arábica",
      doenca: "Queimaduras e problemas de pele",
      preparo: "Aplicação direta do gel da folha na pele afetada.",
      imagem: "/aloe-vera.webp",
    },
    {
      nome: "Gengibre",
      nomeEspecifico: "Zingiber officinale",
      origem: "Sudeste Asiático",
      doenca: "Náuseas e problemas digestivos",
      preparo: "Chá feito com raiz fresca ralada, fervida por 10 minutos.",
      imagem: "/gengibre.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-700 via-emerald-400 to-teal-900 p-8 lg:min-h-[91.5vh] min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white underline mb-12 tracking-tight">
        Plantas Medicinais
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plantas.map((planta, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() =>
              setExpandedCard(expandedCard === index ? null : index)
            }
            className="cursor-pointer"
          >
            <div className="bg-blue-800 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <div className="relative">
                <img
                  src={planta.imagem}
                  alt={planta.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {planta.nome}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-white font-semibold mb-2 italic">
                  {planta.nomeEspecifico}
                </p>
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-emerald-900 mb-2">
                      <span className="font-semibold">Origem:</span>{" "}
                      {planta.origem}
                    </p>
                    <p className="text-emerald-900 mb-2">
                      <span className="font-semibold">Uso:</span>{" "}
                      {planta.doenca}
                    </p>
                    <p className="text-emerald-900">
                      <span className="font-semibold">Preparo:</span>{" "}
                      {planta.preparo}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
