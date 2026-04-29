# 🌱 EcoMarket Web JS

Un rediseño moderno, responsivo y completamente funcional para la tienda de productos orgánicos EcoMarket. Desarrollado como proyecto final del curso PIAD-218 para SENATI.

## 🚀 Características Principales

* **Catálogo Dinámico:** Tarjetas de productos con animaciones CSS suaves al pasar el cursor (Hover).
* **Carrito de Compras Inteligente:** Sistema de adición y sustracción de unidades con controles interactivos generados dinámicamente en el DOM.
* **Persistencia de Datos (Memoria):** El carrito recuerda los productos seleccionados utilizando `localStorage`. Las cantidades se mantienen intactas y sincronizadas al navegar entre las distintas páginas del sitio.
* **Formulario de Contacto Seguro:** Validaciones en tiempo real para alertar sobre campos vacíos o formatos de correo inválidos antes del envío.
* **Mapa Interactivo:** Integración nativa de Google Maps para mostrar la ubicación física de la tienda.
* **Diseño Responsivo (Mobile First):** Interfaz fluida que se adapta perfectamente desde pantallas de celulares hasta monitores de escritorio.

## 🛠️ Tecnologías y Prácticas Utilizadas

* **HTML5:** Estructuración semántica (`<header>`, `<main>`, `<footer>`, `<section>`).
* **CSS3:** Estilos personalizados, sombras y transiciones.
* **Bootstrap 5:** Sistema de grillas y clases utilitarias para la maquetación ágil.
* **JavaScript Puro (Vanilla JS):** Toda la interactividad fue programada desde cero utilizando **estrictamente funciones declaradas tradicionales**, garantizando un código limpio, legible y compatible con las reglas del proyecto.

## 📂 Estructura del Proyecto
```text
ecomarket-web-js/
│
├── index.html                      # Página principal (Hero y Destacados)
├── pages/
│   ├── Página_de_Productos.html    # Catálogo completo interactivo
│   └── Página_de_Contacto.html     # Formulario y mapa de ubicación
└── src/
    ├── css/
    │   └── estilos.css             # Hoja de estilos centralizada
    ├── img/                        # Recursos visuales (Imágenes 1:1 y 16:9)
    └── js/
        └── script.js               # Lógica principal (Carrito, LocalStorage, Validación)
