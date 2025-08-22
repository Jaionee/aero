import React from 'react';

interface PortfolioItemProps {
  type: 'video' | 'image';
  src: string;
  title: string;
  description: string;
  alt?: string;
  aspectRatioClasses?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  type,
  src,
  title,
  description,
  alt = 'Descripción de la imagen del portafolio',
  aspectRatioClasses = 'pt-[50%] sm:pt-[90%]'
}) => {
  return (
    <a className="group block" href="#">
      <div className={`relative ${aspectRatioClasses} rounded-xl overflow-hidden`}>
        {type === 'video' ? (
          <video
            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src={src}
            autoPlay
            loop
            muted
            playsInline
          >
            Tu navegador no soporta el tag de video.
          </video>
        ) : (
          <img
            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src={src}
            alt={alt}
          />
        )}
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default PortfolioItem;