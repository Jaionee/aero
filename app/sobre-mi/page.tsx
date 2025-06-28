import React from 'react';

export default function SobreMi() {
  return (
    <div className="bg-black text-white font-energetic">
      <div className="max-w-screen-2xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src="/LWRAd6C6jvNPiFRb.jpeg" alt="Image Description"/>
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">Sobre mí</h2>
                <p className="text-gray-400">
                  Soy un apasionado de la tecnología y la comunicación audiovisual. Mi objetivo es ofrecer un servicio de grabación y edición de vídeo con drones que sea profesional, creativo y adaptado a las necesidades de cada cliente.
                </p>
                <p className="text-gray-400">
                  Mi experiencia en el sector me ha permitido desarrollar un estilo propio, basado en la calidad de la imagen, la originalidad de los planos y la emotividad de la narrativa. Me gusta cuidar cada detalle, desde la planificación del vuelo hasta la postproducción, para conseguir un resultado que supere las expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
