// =========================================================
// 🌴 PURA SELVA
// CARTA DIGITAL COMPLETA
// =========================================================


// =========================================================
// 📋 CARTA REAL
// Precios y descripciones tomados del archivo Word
// =========================================================

const carta = {

    // =====================================================
    // 🍢 ENTRADAS
    // =====================================================

    entradas: [

        {
            nombre: "Brochetas Amazónicas",
            precio: 20,
            descripcion:
                "Cecina, chorizo, plátano y ensalada de cocona"
        },

        {
            nombre: "Salchipapa Amazónica",
            precio: 20,
            descripcion:
                "Cecina, chorizo, papas fritas y ensalada de cocona"
        },

        {
            nombre: "Canastillas Amazónicas",
            precio: 25,
            descripcion:
                "Ensalada de cocona"
        }

    ],


    // =====================================================
    // 🍲 SOPAS
    // =====================================================

    sopas: [

        {
            nombre: "Chilcano de Carachama",
            precio: 45,
            descripcion:
                "Plátano sancochado y ají charapita"
        },

        {
            nombre: "Chilcano de Palometa",
            precio: 35,
            descripcion:
                "Plátano sancochado y ají charapita"
        },

        {
            nombre: "Chilcano de Doncella",
            precio: 35,
            descripcion:
                "Arroz, plátano sancochado y ají charapita"
        },

        {
            nombre: "Pango de Sábalo",
            precio: 70,
            descripcion:
                "Maduro sancochado y salsa de cocona"
        },

        {
            nombre: "Pango de Boquichico",
            precio: 40,
            descripcion:
                "Maduro sancochado y salsa de cocona"
        },

        {
            nombre: "Pango de Paiche",
            precio: 40,
            descripcion:
                "Maduro sancochado y salsa de cocona"
        }

    ],


    // =====================================================
    // 🍽️ FONDOS
    // =====================================================

    fondos: [

        {
            nombre: "Pescado envuelto en hoja",
            precio: 70,
            descripcion:
                "Tacacho o patacones o plátano asado"
        },

        {
            nombre: "Juane de Gallina",
            precio: 20,
            descripcion:
                "Patacones o maduro frito, salsa de cocona"
        },

        {
            nombre: "Tacacho con Cecina",
            precio: 25,
            descripcion:
                "Chorizo, salsa de cocona"
        },

        {
            nombre: "Chaufa Amazónico",
            precio: 25,
            descripcion:
                "Cecina, chorizo en trozos, maduro frito"
        },

        {
            nombre: "Cecina con Patacones",
            precio: 25,
            descripcion:
                "Chorizo, salsa de cocona"
        },

        {
            nombre: "Maparate frito",
            precio: 35,
            descripcion:
                "Maduro frito o patacones, arroz blanco, salsa de cocona"
        },

        {
            nombre: "Doncella frito",
            precio: 40,
            descripcion:
                "Maduro frito o patacones, arroz blanco, salsa de cocona"
        },

        {
            nombre: "Paiche frito",
            precio: 40,
            descripcion:
                "Maduro frito o patacones, arroz blanco, salsa de cocona"
        },

        {
            nombre: "Palometa frita",
            precio: 35,
            descripcion:
                "Maduro frito o patacones, arroz blanco, salsa de cocona"
        },

        {
            nombre: "Sábalo frito",
            precio: 70,
            descripcion:
                "Maduro frito o patacones, arroz blanco, salsa de cocona"
        }

    ],


    // =====================================================
    // 🍱 COMBOS
    // =====================================================

    combos: [

        {
            nombre: "Combo Mediano de Juane",
            precio: 45,
            descripcion:
                "1 juane, 1 cecina frita, 1 chorizo frito, maduro frito y salsa de cocona"
        },

        {
            nombre: "Combo Mediano Chaufa",
            precio: 60,
            descripcion:
                "2 tacachos, 1 cecina frita, 1 chorizo frito, arroz blanco, maduro frito y salsa de cocona"
        },

        {
            nombre: "Combo de Chaufa Mixto",
            precio: 50,
            descripcion:
                "Arroz chaufa mixta, 1 cecina frita, 1 chorizo frito, maduro frito o patacones y salsa de cocona"
        },

        {
            nombre: "Combo de Juane Grande",
            precio: 70,
            descripcion:
                "1 tacacho, 2 cecinas fritas, 2 chorizos fritos, 1 juane, maduro frito y salsa de cocona"
        },

        {
            nombre: "Combo de Chaufa Grande",
            precio: 80,
            descripcion:
                "2 cecinas fritas, 2 chorizos fritos, 2 tacachos, maduro frito, 1 vaso de refresco de cocona o Camú Camú y salsa de cocona"
        },

        {
            nombre: "Combo Grande de Tacacho",
            precio: 85,
            descripcion:
                "3 tacachos, 2 cecinas fritas, 2 chorizos fritos, patacones, maduro frito, cecina y chorizo picado y salsa de cocona"
        }

    ],


    // =====================================================
    // 🥤 BEBIDAS
    // =====================================================

    bebidas: [

        // JUGOS

        {
            nombre: "Cocona 1/5 Litro",
            precio: 10,
            descripcion:
                "Jugo de cocona"
        },

        {
            nombre: "Cocona 1 Litro",
            precio: 15,
            descripcion:
                "Jugo de cocona"
        },

        {
            nombre: "Camú Camú 1/5 Litro",
            precio: 10,
            descripcion:
                "Jugo de Camú Camú"
        },

        {
            nombre: "Camú Camú 1 Litro",
            precio: 15,
            descripcion:
                "Jugo de Camú Camú"
        },

        {
            nombre: "Aguajina 1/5 Litro",
            precio: 10,
            descripcion:
                "Aguajina"
        },

        {
            nombre: "Aguajina 1 Litro",
            precio: 15,
            descripcion:
                "Aguajina"
        },


        // GASEOSAS

        {
            nombre: "Agua Mineral",
            precio: 3,
            descripcion:
                "Agua mineral"
        },

        {
            nombre: "Inka Cola 1/5 Litro",
            precio: 3.50,
            descripcion:
                "Gaseosa"
        },

        {
            nombre: "Coca Cola 1/5 Litro",
            precio: 3.50,
            descripcion:
                "Gaseosa"
        },

        {
            nombre: "Inka Cola Gordita",
            precio: 5,
            descripcion:
                "Gaseosa"
        },

        {
            nombre: "Coca Cola 1 Litro",
            precio: 8,
            descripcion:
                "Gaseosa"
        },

        {
            nombre: "Inka Cola 1 Litro",
            precio: 8,
            descripcion:
                "Gaseosa"
        },


        // CERVEZAS

        {
            nombre: "Cristal",
            precio: 8,
            descripcion:
                "Cerveza"
        },

        {
            nombre: "Pilsen",
            precio: 9,
            descripcion:
                "Cerveza"
        },

        {
            nombre: "Cusqueña de Trigo",
            precio: 10,
            descripcion:
                "Cerveza"
        },

        {
            nombre: "Cusqueña Negra",
            precio: 10,
            descripcion:
                "Cerveza"
        },

        {
            nombre: "Cerveza San Juan",
            precio: 10,
            descripcion:
                "Cerveza"
        },


        // TRAGOS AMAZÓNICOS

        {
            nombre: "R.C.",
            precio: 48,
            descripcion:
                "Trago amazónico"
        },

        {
            nombre: "7 Raíces",
            precio: 48,
            descripcion:
                "Trago amazónico"
        },

        {
            nombre: "Uvachado",
            precio: 48,
            descripcion:
                "Trago amazónico"
        }

    ],


    // =====================================================
    // ➕ ADICIONALES
    // =====================================================

    adicionales: [

        {
            nombre: "Rosquita de Yuca",
            precio: 3,
            descripcion:
                "2 por S/ 5.00"
        },

        {
            nombre: "Ñuto",
            precio: 3,
            descripcion:
                "2 por S/ 5.00"
        },

        {
            nombre: "Arroz Blanco",
            precio: 8,
            descripcion:
                "Porción"
        },

        {
            nombre: "Porción de Maduro",
            precio: 8,
            descripcion:
                "Porción"
        },

        {
            nombre: "Porción de Patacones",
            precio: 15,
            descripcion:
                "Porción"
        },

        {
            nombre: "Tacacho",
            precio: 13,
            descripcion:
                "Porción"
        }

    ]

};


// =========================================================
// 🛒 CARRITO
// =========================================================

let carrito = [];


// =========================================================
// ELEMENTO CARTA
// =========================================================

const cartaScreen =
    document.getElementById("carta");


// =========================================================
// 🍽️ ABRIR CARTA
// =========================================================

function abrirCarta() {

    cartaScreen.classList.add("active");

    document.body.style.overflow = "hidden";

    mostrarCategorias();

}


// =========================================================
// ← CERRAR CARTA
// =========================================================

function cerrarCarta() {

    cartaScreen.classList.remove("active");

    document.body.style.overflow = "auto";

}


// =========================================================
// ☰ MENÚ PRINCIPAL
// =========================================================

function mostrarMensaje() {

    alert(

        "🌴 PURA SELVA 🌴\n\n" +

        "Sabores que nacen del corazón de la selva.\n\n" +

        "📲 PEDIDOS Y WHATSAPP\n" +
        "940 600 188\n" +
        "925 928 838\n\n" +

        "📞 RESERVAS Y LLAMADAS\n" +
        "986 774 110"

    );

}


// =========================================================
// 🌿 MOSTRAR CATEGORÍAS
// =========================================================

function mostrarCategorias() {

    cartaScreen.innerHTML = `

        <button
            class="back-btn"
            onclick="cerrarCarta()"
        >
            ← VOLVER
        </button>


        <div class="carta-header">

            <div class="carta-logo">
                🌿
            </div>

            <h1>
                NUESTRA CARTA
            </h1>

            <p>
                SABORES DE LA AMAZONÍA
            </p>

        </div>


        <div class="categories">


            <button
                onclick="mostrarCategoria('entradas')"
            >

                🍢

                <span>
                    ENTRADAS
                </span>

            </button>


            <button
                onclick="mostrarCategoria('sopas')"
            >

                🍲

                <span>
                    SOPAS
                </span>

            </button>


            <button
                onclick="mostrarCategoria('fondos')"
            >

                🍽️

                <span>
                    FONDOS
                </span>

            </button>


            <button
                onclick="mostrarCategoria('combos')"
            >

                🍱

                <span>
                    COMBOS
                </span>

            </button>


            <button
                onclick="mostrarCategoria('bebidas')"
            >

                🥤

                <span>
                    BEBIDAS
                </span>

            </button>


            <button
                onclick="mostrarCategoria('adicionales')"
            >

                ➕

                <span>
                    ADICIONALES
                </span>

            </button>

        </div>


        <div class="carta-message">

            <div>
                🌴
            </div>

            <h2>
                SABORES AMAZÓNICOS
            </h2>

            <p>
                Elige una categoría para descubrir
                nuestros platos.
            </p>

            <div>
                🌿
            </div>

        </div>

    `;

}


// =========================================================
// 🍽️ MOSTRAR PRODUCTOS
// =========================================================

function mostrarCategoria(categoria) {

    const productos =
        carta[categoria];


    if (!productos) {

        return;

    }


    const nombresCategorias = {

        entradas: "ENTRADAS",

        sopas: "SOPAS",

        fondos: "FONDOS",

        combos: "COMBOS",

        bebidas: "BEBIDAS",

        adicionales: "ADICIONALES"

    };


    const titulo =
        nombresCategorias[categoria];


    let contenido = `

        <button
            class="back-btn"
            onclick="mostrarCategorias()"
        >
            ← CATEGORÍAS
        </button>


        <div class="carta-header">

            <div class="carta-logo">
                🌿
            </div>

            <h1>
                ${titulo}
            </h1>

            <p>
                SABORES DE LA AMAZONÍA
            </p>

        </div>


        <div class="productos">

    `;


    productos.forEach(
        (producto, indice) => {

            contenido += `

                <article
                    class="producto-card"
                >

                    <div class="producto-imagen">

                        <span>
                            🍽️
                        </span>

                    </div>


                    <div class="producto-info">

                        <h3>
                            ${producto.nombre}
                        </h3>


                        <p>
                            ${producto.descripcion}
                        </p>


                        <div class="producto-bottom">

                            <strong>
                                S/ ${producto.precio.toFixed(2)}
                            </strong>


                            <button
                                onclick="agregarAlCarrito(
                                    '${producto.nombre.replace(/'/g, "\\'")}',
                                    ${producto.precio}
                                )"
                            >

                                + PEDIR

                            </button>

                        </div>

                    </div>

                </article>

            `;

        }
    );


    contenido += `

        </div>


        <div class="carrito-flotante">

            <button
                onclick="mostrarCarrito()"
            >

                🛒

                <span>
                    Ver pedido
                </span>

                <b id="contadorCarrito">
                    ${carrito.length}
                </b>

            </button>

        </div>

    `;


    cartaScreen.innerHTML =
        contenido;

}


// =========================================================
// 🛒 AGREGAR AL CARRITO
// =========================================================

function agregarAlCarrito(
    nombre,
    precio
) {

    const productoExistente =
        carrito.find(
            item =>
                item.nombre === nombre
        );


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarContador();


    mostrarNotificacion(
        "🍽️ Agregado al pedido"
    );

}


// =========================================================
// 🔢 CONTADOR
// =========================================================

function actualizarContador() {

    const contador =
        document.getElementById(
            "contadorCarrito"
        );


    if (contador) {

        const totalProductos =
            carrito.reduce(
                (
                    total,
                    producto
                ) =>
                    total +
                    producto.cantidad,

                0
            );


        contador.textContent =
            totalProductos;

    }

}


// =========================================================
// 🔔 NOTIFICACIÓN
// =========================================================

function mostrarNotificacion(
    mensaje
) {

    const notificacion =
        document.createElement(
            "div"
        );


    notificacion.className =
        "notificacion";


    notificacion.textContent =
        mensaje;


    document.body.appendChild(
        notificacion
    );


    setTimeout(
        () => {

            notificacion.remove();

        },

        1800
    );

}


// =========================================================
// 🛒 MOSTRAR CARRITO
// =========================================================

function mostrarCarrito() {

    if (
        carrito.length === 0
    ) {

        mostrarNotificacion(
            "🛒 Tu pedido está vacío"
        );

        return;

    }


    let total = 0;


    let productosHTML = "";


    carrito.forEach(
        (
            producto,
            indice
        ) => {

            const subtotal =
                producto.precio *
                producto.cantidad;


            total += subtotal;


            productosHTML += `

                <div class="carrito-item">

                    <div>

                        <strong>
                            ${producto.nombre}
                        </strong>

                        <small>
                            S/ ${producto.precio.toFixed(2)}
                        </small>

                    </div>


                    <div class="cantidad">

                        <button
                            onclick="cambiarCantidad(
                                ${indice},
                                -1
                            )"
                        >
                            −
                        </button>


                        <span>
                            ${producto.cantidad}
                        </span>


                        <button
                            onclick="cambiarCantidad(
                                ${indice},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>


                    <strong>
                        S/ ${subtotal.toFixed(2)}
                    </strong>

                </div>

            `;

        }
    );


    cartaScreen.innerHTML = `

        <button
            class="back-btn"
            onclick="mostrarCategorias()"
        >
            ← CARTA
        </button>


        <div class="carta-header">

            <div class="carta-logo">
                🛒
            </div>

            <h1>
                TU PEDIDO
            </h1>

            <p>
                Revisa tus productos
            </p>

        </div>


        <div class="carrito-lista">

            ${productosHTML}

        </div>


        <div class="carrito-total">

            <span>
                TOTAL
            </span>

            <strong>
                S/ ${total.toFixed(2)}
            </strong>

        </div>


        <button
            class="whatsapp-pedido"
            onclick="enviarPedidoWhatsApp()"
        >

            💬 ENVIAR PEDIDO POR WHATSAPP

        </button>


        <button
            class="vaciar-pedido"
            onclick="vaciarCarrito()"
        >

            🗑️ Vaciar pedido

        </button>

    `;

}


// =========================================================
// ➕➖ CAMBIAR CANTIDAD
// =========================================================

function cambiarCantidad(
    indice,
    cantidad
) {

    carrito[indice].cantidad +=
        cantidad;


    if (
        carrito[indice].cantidad <= 0
    ) {

        carrito.splice(
            indice,
            1
        );

    }


    mostrarCarrito();

}


// =========================================================
// 🗑️ VACIAR CARRITO
// =========================================================

function vaciarCarrito() {

    carrito = [];

    mostrarCategorias();

    mostrarNotificacion(
        "🗑️ Pedido eliminado"
    );

}


// =========================================================
// 💬 ENVIAR PEDIDO POR WHATSAPP
// =========================================================

function enviarPedidoWhatsApp() {

    if (
        carrito.length === 0
    ) {

        return;

    }


    let mensaje =
        "Hola Pura Selva 🌴\n\n" +

        "Quiero realizar el siguiente pedido:\n\n";


    let total = 0;


    carrito.forEach(
        producto => {

            const subtotal =
                producto.precio *
                producto.cantidad;


            total += subtotal;


            mensaje +=

                "🍽️ " +
                producto.cantidad +
                " x " +
                producto.nombre +
                " — S/ " +
                subtotal.toFixed(2) +
                "\n";

        }
    );


    mensaje +=

        "\n💰 TOTAL: S/ " +
        total.toFixed(2) +

        "\n\n" +

        "¿Me pueden confirmar mi pedido?";


    const url =

        "https://wa.me/51940600188?text=" +

        encodeURIComponent(
            mensaje
        );


    window.open(
        url,
        "_blank"
    );

}


// =========================================================
// 📞 PEDIDO INDIVIDUAL
// =========================================================

function prepararPedido(
    nombre,
    precio
) {

    const mensaje =

        "Hola Pura Selva 🌴\n\n" +

        "Quiero pedir:\n\n" +

        "🍽️ " +
        nombre +
        "\n" +

        "💰 S/ " +
        precio.toFixed(2) +

        "\n\n" +

        "¿Me pueden confirmar?";


    const url =

        "https://wa.me/51940600188?text=" +

        encodeURIComponent(
            mensaje
        );


    window.open(
        url,
        "_blank"
    );

}


// =========================================================
// ⌨️ ESCAPE
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarCarta();

        }

    }
);


// =========================================================
// 🚀 INICIO
// =========================================================

console.log(
    "%c🌴 PURA SELVA 🌴",
    "color:#dcae38;font-size:24px;font-weight:bold;"
);


console.log(
    "%cCarta digital cargada correctamente.",
    "color:#65df86;font-size:14px;"
);


console.log(
    "Productos:",
    carta
);