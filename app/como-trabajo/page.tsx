import React from 'react';

export default function ComoTrabajo() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-energetic bg-black min-h-screen text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-white font-bold sm:text-3xl">
                Cómo es mi proceso de trabajo
              </h2>
              <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">1. Reunión inicial</span>
                      <span className="block mt-1 text-gray-400">Hablamos de tu proyecto, tus ideas y lo que necesitas. Te asesoro sobre las mejores opciones.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">2. Plan de vuelo y presupuesto</span>
                      <span className="block mt-1 text-gray-400">Definimos ubicaciones, condiciones y tipo de planos a grabar. Coordinamos tiempos y detalles. Para ello necesitamos 1h de vuelo (gratuito) días previos a la grabación pactada.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">3. Grabación aérea</span>
                      <span className="block mt-1 text-gray-400">Dron propio, control total. Capturo tomas según lo pactado, con margen para creatividad.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-4" data-hs-tab="#tabs-with-card-4" aria-controls="tabs-with-card-4" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">4. Edición y montaje</span>
                      <span className="block mt-1 text-gray-400">Selecciono tomas, edito con ritmo, color, música y textos si se necesita. Entrego una primera versión.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1" id="tabs-with-card-item-5" data-hs-tab="#tabs-with-card-5" aria-controls="tabs-with-card-5" role="tab">
                  <span className="flex">
                    <span className="grow">
                      <span className="block text-lg font-semibold text-white">5. Correcciones y entrega final</span>
                      <span className="block mt-1 text-gray-400">Incluyo una revisión para afinar detalles y asegurar que el resultado encaje contigo.</span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>
            <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/oWdQooxyQkm92CRj.webp" alt="Image Description"/>
                  </div>
                  <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/pexels-photo-32479534.jpeg" alt="Image Description"/>
                  </div>
                  <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/file.svg" alt="Image Description"/>
                  </div>
                   <div id="tabs-with-card-4" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-4">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/vite.svg" alt="Image Description"/>
                  </div>
                   <div id="tabs-with-card-5" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-5">
                    <img className="shadow-xl shadow-gray-800 max-h-[550px] rounded-xl" src="/image/window.svg" alt="Image Description"/>
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