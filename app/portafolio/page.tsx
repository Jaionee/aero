import React from 'react';

export default function Portafolio() {
  return (
    <div className="bg-black text-white font-energetic min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Portafolio</h2>
          <p className="mt-1 text-gray-400">Aquí puedes ver algunos de nuestros trabajos anteriores.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <video
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/videos/Video de WhatsApp 2025-07-09 a las 18.08.37_d1a0be6d.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Documental</h3>
              <p className="mt-3 text-gray-400">Cortometraje documental sobre la vida en el campo.</p>
            </div>
          </a>
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <video
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/videos/Video de WhatsApp 2025-07-10 a las 14.18.32_27036cd0.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Video corporativo</h3>
              <p className="mt-3 text-gray-400">Producción de video para empresa del sector tecnológico.</p>
            </div>
          </a>
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/image/hl80FYi8G13jT7n1.jpeg" alt="Image Description"/>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Evento social</h3>
              <p className="mt-3 text-gray-400">Grabación y edición de video para boda en la playa.</p>
            </div>
          </a>
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <video
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/videos/1.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Tu navegador no soporta el tag de video.
              </video>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Magia Pirotécnica</h3>
              <p className="mt-3 text-gray-400">La belleza efímera de los fuegos artificiales en su máximo esplendor.</p>
            </div>
          </a>
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <video
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/videos/2.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Noche de Luces</h3>
              <p className="mt-3 text-gray-400">Capturando la magia de la iluminacion en un evento espectacular.</p>
            </div>
          </a>
          <a className="group block" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <video
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/videos/3.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Vistas panoramicas</h3>
              <p className="mt-3 text-gray-400">Disfruta del paisaje y las vistas panoramicas desde diferentes ángulos.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
