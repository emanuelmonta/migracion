import Header from "../components/Header"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"
import { beneficios } from "../data"
function Information() {
  return (
    <>
      <Header />
      <section id="beneficios" class="py-20 bg-white border-t border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Experiencia Vértice</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              ¿Por qué comprar con nosotros?
            </h2>
            <p class="text-gray-600 mt-3 text-base sm:text-lg">
              Más que una tienda, te acompañamos antes, durante y después de tu compra.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {
              beneficios.map((item) => 
                {<ServiceCard data={item} />}
            )}
          </div>

          <div class="max-w-3xl mx-auto">
            <h3 class="text-xl font-bold text-gray-900 text-center mb-6">Preguntas Frecuentes</h3>
            <div class="space-y-3">
              <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>¿Cuánto tarda en llegar mi pedido?</span>
                  <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                  Los pedidos confirmados antes de las 17:00 h se envían el mismo día y llegan en 24 a 48 horas hábiles en zonas urbanas.
                </p>
              </details>

              <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>¿Hacen envíos gratuitos?</span>
                  <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                  Sí, todas las compras superiores a $80.00 tienen envío estándar completamente gratuito.
                </p>
              </details>

              <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>¿Puedo solicitar factura para empresa?</span>
                  <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                  Por supuesto. Indícanos tus datos fiscales en la sección de contacto o al finalizar tu pedido y recibirás la factura en PDF.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Information
