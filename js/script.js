/* Definicion de variables por tipo de producto (Categoria) */

/* Cursos */
let coursesProd01Price;
let coursesProd01Stock;

/* Difusores */
let diffProd01Price;
let diffProd01Stock;
let diffProd02Price;
let diffProd02Stock;
let diffProd03Price;
let diffProd03Stock;
let diffProd04Price;
let diffProd04Stock;
let diffProd05Price;
let diffProd05Stock;
let diffProd06Price;
let diffProd06Stock;
let diffProd07Price;
let diffProd07Stock;
let diffProd08Price;
let diffProd08Stock;
let diffProd09Price;
let diffProd09Stock;

/* Accesorios */
let accProd01Price;
let accProd01Stock;
let accProd02Price;
let accProd02Stock;
let accProd03Price;
let accProd03Stock;
let accProd04Price;
let accProd04Stock;
let accProd05Price;
let accProd05Stock;
let accProd06Price;
let accProd06Stock;
let accProd07Price;
let accProd07Stock;
let accProd08Price;
let accProd08Stock;
let accProd09Price;
let accProd09Stock;

/* Perfuminas */
let perfProd01Price;
let perfProd01Stock;
let perfProd02Price;
let perfProd02Stock;
let perfProd03Price;
let perfProd03Stock;
let perfProd04Price;
let perfProd04Stock;
let perfProd05Price;
let perfProd05Stock;
let perfProd06Price;
let perfProd06Stock;
let perfProd07Price;
let perfProd07Stock;
let perfProd08Price;
let perfProd08Stock;
let perfProd09Price;
let perfProd09Stock;

/* Velas */
let candProd01Price;
let candProd01Stock;
let candProd02Price;
let candProd02Stock;
let candProd03Price;
let candProd03Stock;
let candProd04Price;
let candProd04Stock;
let candProd05Price;
let candProd05Stock;
let candProd06Price;
let candProd06Stock;
let candProd07Price;
let candProd07Stock;
let candProd08Price;
let candProd08Stock;
let candProd09Price;
let candProd09Stock;

/* Carrito */
let totalAmountProd;
let totalPrice;

/* Login / Register */
let userName;
let userEmail;
let userPassword;
let userAddress;

/* Definición Funciones */

function userRegistry(NombreCompleto) {
    alert("Bievenido al Sitio " + NombreCompleto);
}


/* Ejemplo Registro */

userName = prompt("Ingrese su Nombre y Apellido");
while (userName.length === 0){
  alert("Ingrese un dato valido")
  userName = prompt("Ingrese su Nombre y Apellido")
}
userEmail = prompt("Ingrese su correo electrónico");
while (userEmail.length === 0){
  alert("Ingrese un dato valido")
  userEmail = prompt("Ingrese su correo electrónico")
}
userPassword = prompt("Ingrese su contraseña");
while (userPassword.length === 0){
  alert("Ingrese un dato valido")
  userEmail = prompt("Ingrese una contraseña")
}
userAddress = prompt("Ingrese su dirección de envio");
while (userAddress.length === 0){
  alert("Ingrese un dato valido")
  userEmail = prompt("Ingrese su correo electrónico")
}
userRegistry(userName);

/* Ejemplo Carrito */

