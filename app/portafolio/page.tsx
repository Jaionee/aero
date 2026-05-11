import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const portfolioData = [
  {
    type: 'video',
    src: '/videos/Video de WhatsApp 2025-07-09 a las 18.08.37_d1a0be6d.mp4',
    title: 'Documental',
    description: 'Cortometraje documental sobre la vida en el campo.',
  },
  {
    type: 'video',
    src: '/videos/Video de WhatsApp 2025-07-10 a las 14.18.32_27036cd0.mp4',
    title: 'Video corporativo',
    description: 'Producción de video para empresa del sector tecnológico.',
  },
  {
    type: 'image',
    src: '/image/hl80FYi8G13jT7n1.jpeg',
    title: 'Evento social',
    description: 'Grabación y edición de video para boda en la playa.',
    alt: 'Boda en la playa'
  },
  {
    type: 'video',
    src: '/videos/1.mp4',
    title: 'Magia Pirotécnica',
    description: 'La belleza efímera de los fuegos artificiales en su máximo esplendor.',
  },
  {
    type: 'video',
    src: '/videos/2.mp4',
    title: 'Noche de Luces',
    description: 'Capturando la magia de la iluminacion en un evento espectacular.',
  },
  {
    type: 'video',
    src: '/videos/3.mp4',
    title: 'Vistas panoramicas',
    description: 'Disfruta del paisaje y las vistas panoramicas desde diferentes ángulos.',
  },
] as const;

export default function Portafolio() {
  // Puedes cambiar el formato (aspect ratio) de todos los videos e imágenes aquí.
  // Por ejemplo: "pt-[56.25%]" para un formato 16:9
  const aspectRatioClasses = "pt-[50%] sm:pt-[90%]";

  return (
    <div className="bg-black text-white font-energetic min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Portafolio</h2>
          <p className="mt-1 text-gray-400">Aquí puedes ver algunos de nuestros trabajos anteriores.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((item) => (
            <PortfolioItem key={item.src} {...item} aspectRatioClasses={aspectRatioClasses} />
          ))}
        </div>
      </div>
    </div>
  );
}
