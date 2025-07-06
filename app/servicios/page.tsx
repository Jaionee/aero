import React from 'react';
import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-energetic bg-black min-h-screen text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-white font-bold sm:text-3xl">
                  Servicios que ofrezco
                </h2>
                <Link href="/contacto" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none">Contactanos</Link>
              </div>
              <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">Grabación con drones</span>
                      <div className="block mt-1 text-gray-400">
                        <p>Ofrezco un servicio de grabación aérea profesional con dron propio. Disponemos de los mejores drones para cada ocasión:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                          <li>Crear una atmósfera épica en primera persona.</li>
                          <li>Realizar tomas cinematográficas.</li>
                          <li>Realizar un excelente trabajo con dron de apoyo.</li>
                        </ul>
                        <p className="mt-2">Precio depende del tiempo y complejidad del objetivo. Incluida 1h de vuelo de prueba gratuita.</p>
                      </div>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">Edición y postproducción</span>
                      <span className="block mt-1 text-gray-400">Montaje audiovisual completo adaptado al objetivo del cliente. Precio según cantidad y tipo de material.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">Flexibilidad total</span>
                      <span className="block mt-1 text-gray-400">Ambos servicios se pueden contratar juntos o por separado, según necesidad.</span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/6O4sNosVRIp7jvxa.png" alt="Image Description"/>
                  </div>
                  <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/pexels-photo-32479534.jpeg" alt="Image Description"/>
                  </div>
                  <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/file.svg" alt="Image Description"/>
                  </div>
                </div>
                {/* End Tab Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
