function ServiceCard() {
  return (
    <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100">
      <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="font-bold text-gray-900 text-lg">Envío Express 24h</h3>
      <p class="text-sm text-gray-600 mt-2">
        Despachamos tu pedido el mismo día para que lo recibas sin esperas innecesarias.
      </p>
    </div>
  )
}

export default ServiceCard
