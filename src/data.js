export const productos = [
    {
        id: 1,
        nombre: "Cargador Magnético Duo",
        categoria: "Audio & Móvil",
        descripcion: "Carga rápida inalámbrica de 15W para teléfono y reloj simultáneamente.",
        precio: 59,
        precioAnterior: null,
        calificacion: 4.9,
        resenas: 128,
        etiqueta: {
            texto: "Más vendido",
            colorBg: "bg-indigo-600",
        },
        imagen: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
        alt: "Cargador Magnético Duo",
        fondoImagen: "bg-indigo-50",
        especificaciones: [
            "Entrada USB-C PD 30W incluida",
            "Base antideslizante de silicona",
            "Protección contra sobrecalentamiento",
        ],
    },
    {
        id: 2,
        nombre: 'Portátil UltraBook Pro 14"',
        categoria: "Cómputo",
        descripcion: "Pantalla Liquid Retina de alta precisión, chasis unibody y batería para todo el día.",
        precio: 1299,
        precioAnterior: null,
        calificacion: 4.8,
        resenas: 94,
        etiqueta: {
            texto: "Nuevo",
            colorBg: "bg-purple-600",
        },
        imagen: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
        alt: "Portátil UltraBook Pro 14",
        fondoImagen: "bg-purple-50",
        especificaciones: [
            "16 GB RAM y SSD NVMe de 512 GB",
            "Autonomía de hasta 17 horas",
            "Puertos Thunderbolt y lector SD",
        ],
    },
    {
        id: 3,
        nombre: "Mochila Urbana Impermeable",
        categoria: "Viaje & Urbano",
        descripcion: 'Acabado minimalista resistente al agua con compartimento acolchado para portátil de 16".',
        precio: 89,
        precioAnterior: null,
        calificacion: 5.0,
        resenas: 76,
        etiqueta: {
            texto: "Eco",
            colorBg: "bg-green-600",
        },
        imagen: "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
        alt: "Mochila Urbana Impermeable",
        fondoImagen: "bg-green-50",
        especificaciones: [
            "Capacidad de 22 litros",
            "Cremalleras selladas antirrobo",
            "Respaldo ergonómico transpirable",
        ],
    },
    {
        id: 4,
        nombre: "Lámpara LED de Escritorio",
        categoria: "Iluminación",
        descripcion: "Iluminación cálida ambiental con diseño contemporáneo para estudio o sala.",
        precio: 74,
        precioAnterior: 95,
        calificacion: 4.7,
        resenas: 61,
        etiqueta: {
            texto: "Oferta",
            colorBg: "bg-red-600",
        },
        imagen: "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
        alt: "Lámpara LED de Escritorio",
        fondoImagen: "bg-yellow-50",
        especificaciones: [
            "Índice CRI > 95 sin parpadeos",
            "3 modos: lectura, estudio y descanso",
            "Base estable de acabado mate",
        ],
    },
    {
        id: 5,
        nombre: "Smartwatch Pulse S2",
        categoria: "Wearables",
        descripcion: "Pantalla AMOLED, seguimiento deportivo GPS y autonomía de hasta 14 días.",
        precio: 159,
        precioAnterior: null,
        calificacion: 4.8,
        resenas: 112,
        etiqueta: null,
        imagen: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
        alt: "Smartwatch Pulse S2",
        fondoImagen: "bg-blue-50",
        especificaciones: [
            "Resistencia al agua 5 ATM",
            "Correa intercambiable de 22 mm",
            "Monitorización cardíaca 24/7",
        ],
    },
];

export let beneficios = [
  {
    titulo: "Envío Express 24h",
    descripcion: "Despachamos tu pedido el mismo día para que lo recibas sin esperas innecesarias.",
    colorBg: "bg-indigo-100",
    colorTexto: "text-indigo-600",
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    titulo: "Garantía de 2 Años",
    descripcion: "Todos nuestros productos cuentan con cobertura total ante cualquier defecto de fábrica.",
    colorBg: "bg-green-100",
    colorTexto: "text-green-600",
    svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    titulo: "Pago 100% Seguro",
    descripcion: "Aceptamos tarjetas, transferencias y pagos fraccionados con cifrado de extremo a extremo.",
    colorBg: "bg-purple-100",
    colorTexto: "text-purple-600",
    svgPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  },
  {
    titulo: "30 Días de Prueba",
    descripcion: "Si no te convence al probarlo, gestionamos la devolución gratuita sin preguntas.",
    colorBg: "bg-yellow-100",
    colorTexto: "text-yellow-600",
    svgPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }
];