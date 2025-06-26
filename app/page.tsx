import React from "react";

const navItems = [
  { name: "Inicio", link: "/" },
  { name: "Servicios", link: "/servicios" },
  { name: "Portafolio", link: "/portafolio" },
  { name: "Contacto", link: "/contacto" },
  { name: "Sobre mí", link: "/sobre-mi" },
  { name: "Cómo trabajo", link: "/como-trabajo" },
];

export default function Inicio() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* HEADER */}
      <header className="min-h-[60px] flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 border-b border-gray-600">
        <nav className="relative max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex text-xl gap-2 items-center font-semibold text-white">
            <img src="/logo.png" alt="Logo" className="w-[40px] rounded-lg" />
            <span className="text-[20px] leading-none">Aero4</span>
          </a>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="font-medium text-white hover:text-orange-500">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

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
            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-white">Pickaxe Asistente IA</h3>
              <p className="mt-3 text-gray-400">
                ¡Hola! Soy el asistente virtual de Aero4fa. Hazme cualquier pregunta sobre productos y servicios, estoy aquí para ayudarte a descubrir todo lo que Aero4fa tiene para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

Jaione, [26/06/2025 11:46]
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

      {/* FOOTER */}
      <footer className="bg-black p-4 border-t border-gray-600">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12 pt-10">
          <div>
            <a href="/" className="text-white flex items-center gap-2 text-xl font-bold md:text-2xl">
              <img src="/logo.png" alt="Logo" className="w-[40px] rounded-lg" />
              <span>Aero4</span>
            </a>
            <p className="text-gray-400 max-w-[500px] mb-6">
              Servicios profesionales de vuelo de dron y edición por un freelance comprometido. Calidad accesible, enfoque profesional.
            </p>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                className="text-gray-400 hover:text-orange-500 transition duration-100"
                href={item.link}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
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