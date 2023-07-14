// Declaración de constantes
const OPCION_SALIR = 4;
const IVA = 1.21;
const PRODUCTOS = {
  1: { nombre: "Cerveza IPA", precio: 800 },
  2: { nombre: "Cerveza APA", precio: 600 },
  3: { nombre: "Cerveza Golden", precio: 500 }
};
let carrito = [];

// Función para mostrar los productos por categoría
function mostrarProductoPorCategoria(categoria) {
  // Lógica para mostrar los productos de la categoría
  alert(`Mostrando productos de la categoría: ${categoria}`);
}

// Función para ver los productos
function verProductos() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Elige la operación que deseas: \n 1-Cerveza IPA \n 2-Cerveza APA \n 3-Cerveza Golden \n 4-Volver atrás"
      )
    );
    if (opcion >= 1 && opcion <= 3) {
      mostrarProductoPorCategoria(PRODUCTOS[opcion].nombre);
    } else if (opcion !== OPCION_SALIR) {
      alert("Ingresaste una opción inválida.");
    }
  } while (opcion !== OPCION_SALIR);
}

// Función para agregar un producto al carrito
function agregarItemAlCarrito() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Elige el producto que deseas agregar al carrito: \n 1-Cerveza IPA \n 2-Cerveza APA \n 3-Cerveza Golden \n 4-Volver atrás"
      )
    );
    if (opcion >= 1 && opcion <= 3) {
      const producto = PRODUCTOS[opcion];
      carrito.push(producto);
      alert(`Se agregó "${producto.nombre}" al carrito.`);
    } else if (opcion !== OPCION_SALIR) {
      alert("Ingresaste una opción inválida.");
    }
  } while (opcion !== OPCION_SALIR);
}

// Función para ver el contenido del carrito y calcular el total
function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let mensaje = "Contenido del carrito:\n";
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      mensaje += `${carrito[i].nombre} - Precio: $${carrito[i].precio}\n`;
      total += carrito[i].precio;
    }
    alert(`${mensaje}\nSubtotal de la compra: $${total}\nTotal de la compra con IVA: $${total*IVA}`);
  }
}

// Menú principal
alert("Bienvenido al carrito de compras de India Brewery, la cerveza más rica de BsAs");

const nombreUsuario = prompt("Ingrese su nombre de usuario");
const passUsuario = prompt("Ingrese su contraseña");

/*aca siempre estoy dando como valida la contraseña del usuario, mi idea en el futuro con mas conocimientos es buscar en mi
base de datos si la contraseña existe y denegar el acceso si la contraseña es incorrecta. Se que no fue requerido para esta entrega
por lo cual no lo hice, pero ya estoy aprendiendo con youtube como hacerlo */

alert(`Bienvenido ${nombreUsuario}\nSu registro es correcto`);

let opcion;
do {
  opcion = parseInt(
    prompt(
      "Elige la operación que deseas: \n 1-Ver Cervezas \n 2-Agregar al carrito \n 3-Ver Carrito \n 4-Salir"
    )
  );
  if (opcion >= 1 && opcion <= OPCION_SALIR) {
    switch (opcion) {
      case 1:
        verProductos();
        break;
      case 2:
        agregarItemAlCarrito();
        break;
      case 3:
        verCarrito();
        break;
      default:
        break;
    }
  } else {
    alert("Ingresaste una opción inválida.");
  }
} while (opcion !== OPCION_SALIR);

alert("Gracias por su compra, vuelva pronto.");