// =========================================================
// 1. LÓGICA DEL CARRITO CON MEMORIA (Funciones Tradicionales)
// =========================================================

// Intentar leer si ya hay productos guardados en el navegador
var memoriaCarrito = localStorage.getItem('carritoEcoMarket');
var cantidades;

// Si hay datos guardados o empezamos todo en 0.
if (memoriaCarrito) {
    cantidades = JSON.parse(memoriaCarrito);
} else {
    cantidades = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 };
}

// Esta función se ejecuta sola al cargar CUALQUIER página
window.onload = function () {
    configurarBotonesIniciales();
    actualizarContadorTotal(); // Actualiza el globito rojo arriba al instante
};

// Función para guardar los cambios en la memoria del navegador
function guardarEnMemoria() {
    localStorage.setItem('carritoEcoMarket', JSON.stringify(cantidades));
}

// Escanea la página actual para ver qué productos están en pantalla
function configurarBotonesIniciales() {
    for (var i = 1; i <= 6; i++) {
        var idBoton = 'btn-prod-' + i;
        var btn = document.getElementById(idBoton);

        if (btn) {
            // Si el producto ya tiene unidades en memoria, dibujamos los controles [-] [+]
            if (cantidades[i] > 0) {
                renderizarControles(idBoton, i.toString());
            } else {
                // Si está en 0, le ponemos su evento al botón verde normal
                btn.setAttribute('onclick', 'agregarAlCarrito("' + idBoton + '", "' + i + '")');
            }
        }
    }
}

// Función principal al presionar "Agregar al carrito"
function agregarAlCarrito(idContenedor, idProducto) {
    cantidades[idProducto] = 1;
    guardarEnMemoria();
    renderizarControles(idContenedor, idProducto);
    actualizarContadorTotal();
}

// Función para el botón [+]
function sumarUnidad(idContenedor, idProducto) {
    cantidades[idProducto] = cantidades[idProducto] + 1;
    guardarEnMemoria();
    renderizarControles(idContenedor, idProducto);
    actualizarContadorTotal();
}

// Función para el botón [-]
function restarUnidad(idContenedor, idProducto) {
    cantidades[idProducto] = cantidades[idProducto] - 1;
    guardarEnMemoria();
    renderizarControles(idContenedor, idProducto);
    actualizarContadorTotal();
}

// Reemplaza visualmente el botón por los controles
function renderizarControles(idContenedor, idProducto) {
    var contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    var cantidad = cantidades[idProducto];

    if (cantidad === 0) {
        // Regresa al botón original si llega a 0
        contenedor.outerHTML = '<button id="' + idContenedor + '" class="btn btn-outline-success btn-sm rounded-pill px-4 fw-bold" onclick="agregarAlCarrito(\'' + idContenedor + '\', \'' + idProducto + '\')">Agregar al carrito</button>';
    } else {
        // Muestra los controles [-] Número [+]
        contenedor.outerHTML = '<div id="' + idContenedor + '" class="d-flex align-items-center justify-content-center">' +
            '<button class="btn btn-success btn-sm rounded-circle px-2 fw-bold shadow-sm" style="width: 32px; height: 32px;" onclick="restarUnidad(\'' + idContenedor + '\', \'' + idProducto + '\')">-</button>' +
            '<span class="mx-3 fw-bold fs-5 text-dark">' + cantidad + '</span>' +
            '<button class="btn btn-success btn-sm rounded-circle px-2 fw-bold shadow-sm" style="width: 32px; height: 32px;" onclick="sumarUnidad(\'' + idContenedor + '\', \'' + idProducto + '\')">+</button>' +
            '</div>';
    }
}

// Suma todo y actualiza la burbuja del carrito en la cabecera
function actualizarContadorTotal() {
    var total = 0;
    for (var key in cantidades) {
        total = total + cantidades[key];
    }
    var badge = document.getElementById('contador-carrito');
    if (badge) {
        badge.innerText = total;
    }
}

// =========================================================
// 2. LÓGICA DE VALIDACIÓN DEL FORMULARIO DE CONTACTO
// =========================================================

function validarFormulario() {
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');
    var alerta = document.getElementById('mensaje-alerta');

    nombre.classList.remove('is-invalid');
    correo.classList.remove('is-invalid');
    mensaje.classList.remove('is-invalid');

    var esValido = true;
    var textoError = "";

    if (nombre.value.trim() === "") {
        nombre.classList.add('is-invalid');
        esValido = false;
        textoError = textoError + "• El campo de nombre no puede estar vacío.<br>";
    }

    if (correo.value.trim() === "") {
        correo.classList.add('is-invalid');
        esValido = false;
        textoError = textoError + "• El campo de correo no puede estar vacío.<br>";
    } else if (correo.value.indexOf('@') === -1 || correo.value.indexOf('.') === -1) {
        correo.classList.add('is-invalid');
        esValido = false;
        textoError = textoError + "• Ingresa un correo electrónico válido.<br>";
    }

    if (mensaje.value.trim() === "") {
        mensaje.classList.add('is-invalid');
        esValido = false;
        textoError = textoError + "• El campo de mensaje no puede estar vacío.<br>";
    }

    if (esValido === true) {
        alerta.innerHTML = '<div class="alert alert-success fw-bold shadow-sm">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</div>';
        nombre.value = "";
        correo.value = "";
        mensaje.value = "";
    } else {
        alerta.innerHTML = '<div class="alert alert-danger shadow-sm">' + textoError + '</div>';
    }
}