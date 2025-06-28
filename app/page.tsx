import React from "react";

export default function Inicio() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* HERO */}
      <section
        className="text-orange-100 font-bold"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.pexels.com/photos/8783857/pexels-photo-8783857.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container max-w-screen-2xl mx-auto flex px-5 py-24 pt-64 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-orange-100">
              Imágenes aéreas profesionales a precio freelance
            </h1>
            <p className="mb-8 leading-relaxed">
              Vuelo con dron propio y edición completa por un operador independiente. Calidad real, con presupuestos ajustados.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex text-orange-100 bg-orange-500 hover:bg-orange-700 border-0 py-2 px-6 rounded text-lg"
                href="/servicios"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ASISTENTE IA */}
      <section className="px-4 py-10 bg-black font-bold">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="group rounded-xl overflow-hidden flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 absolute top-0 left-0 object-cover rounded-xl w-full h-full"
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Pickaxe IA"
              />
            </div>
            <div className="grow mt-4 flex flex-col justify-center sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-white">
                ¿Tienes dudas? Pregúntale a nuestro Asistente IA
              </h3>
              <p className="mt-3 text-gray-400">
                Usa nuestro chat de inteligencia artificial para obtener respuestas al instante sobre nuestros servicios, precios y disponibilidad. Haz clic en el ícono de chat para empezar.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* BLOQUE ¿Por qué un precio más bajo? */}
      <section className="px-4 py-10 bg-black font-bold">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 mb-10">
            <h2 className="text-2xl text-white font-bold sm:text-3xl">¿Por qué un precio más bajo?</h2>
            <div className="grid gap-5 mt-5">
              <FeatureItem
                title="Operador freelance"
                desc="No hay intermediarios ni estructura empresarial, solo trabajo directo y personalizado."
              />
              <FeatureItem
                title="Dron propio y edición a medida"
                desc="Vuelos a demanda y la edición se realiza en casa (excepto vuelo): Inspección del escenario, vuelo, captura, montaje y entrega final."
              />
              <FeatureItem
                title="Calidad real a precio justo"
                desc="Este es un precio promocional por ser profesional en crecimiento, pero entrego resultados serios y útiles."
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="shadow-xl max-h-[550px] rounded-xl"
              src="https://images.pexels.com/photos/32479534/pexels-photo-32479534.jpeg"
              alt="¿Por qué un precio más bajo?"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, desc }) => (
  <div className="hover:bg-gray-800 text-start p-4 rounded-xl">
    <span className="block text-lg font-semibold text-white">{title}</span>
    <span className="block mt-1 text-gray-400">{desc}</span>
  </div>
);