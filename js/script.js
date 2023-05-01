/* Definicion de variables por tipo de producto (Categoria) */

/* Cursos */
/* let coursesProd01Price;
let coursesProd01Stock; */

/* Difusores */
let diffProd01Price = 450;
let diffProd01Stock = 100;
/* let diffProd02Price;
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
let diffProd09Stock; */

/* Accesorios */
/* let accProd01Price;
let accProd01Stock; */
/* let accProd02Price;
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
let accProd09Stock; */

/* Perfuminas */
let perfProd01Price = 570;
let perfProd01Stock = 200;
/* let perfProd02Price;
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
let perfProd09Stock; */

/* Velas */
let candProd01Price = 700;
let candProd01Stock = 500;
/* let candProd02Price;
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
let candProd09Stock; */

/* Carrito */
let totalAmountProd = 0;
let totalPrice = 0;
let montoDifu = 0;
let montoPerfu = 0;
let montoVelas = 0;
let candlePurchase = 0;
let perfPurchase = 0;
let diffPurchase = 0;

/* Login / Register */
let userName;
let userEmail;
let userPassword;
let userAddress;

/* Definición Funciones */

function userRegistry(NombreCompleto) {
  alert(`Bienvenido al Sitio ${NombreCompleto}`);
}

/* function checkOut(totalAmountProd, totalPrice){
  while (totalAmountProd === 0){
    alert("Añada productos al carrito antes del checkout");
    break;
  }
    alert(`Gracias por su compra de ${totalAmountProd} por un total de ${totalPrice}`);
} */

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

function menu(){
  let carritoOperacion = prompt("Ingrese los productos que desea agregar: \n 1 - Velas \n 2 - Difusores \n 3 - Perfuminas \n 4 - CheckOut \n 5 - Salir");
    switch(carritoOperacion){
      case "1":
        candle();
        break;
      case "2":
        difusor();
        break;
      case "3":
        perfumina();
        break;
      case "4":
        checkOut();
        break;
      case "5":
        alert("Gracias por utilizar la plataforma");
        break;
      default:
        alert("Ingrese una opcion de la lista");
        menu();
    }
  }

function candle(){
  candlePurchase = parseInt(prompt(`Ingrese cantidad a comprar, precio unidad: $ ${candProd01Price}`));
  if(candlePurchase === 0 ){
    alert("No se ha seleccionado ninguna cantidad");
    menu();
  }
  else{
    if (candlePurchase <= candProd01Stock){
      candProd01Stock -= candlePurchase; // reduzco cantidad a comprar del stock
      totalAmountProd += candlePurchase; // agrego la cantidad de productos totales
      montoVelas = candlePurchase * candProd01Price;
      alert(`Gracias por comprar ${candlePurchase} Velas`);
      menu();
    }
    else{
      alert(`No hay suficiente stock para la compra ingrese un valor menor o igual a ${candProd01Stock}`);
      menu();    
    }
  }
}

function difusor(){
  diffPurchase = parseInt(prompt(`Ingrese cantidad a comprar, precio unidad: $ ${diffProd01Price}`));
  if(diffPurchase === 0 ){
    alert("No se ha seleccionado ninguna cantidad");
    menu();
  }
  else{
    if (diffPurchase <= diffProd01Stock){
      diffProd01Stock -= diffPurchase; // reduzco cantidad a comprar del stock
      totalAmountProd += diffPurchase; // agrego la cantidad de productos totales
      montoDifu = diffPurchase * diffProd01Price;
      alert(`Gracias por comprar ${diffPurchase} Difusores`);
      menu();
    }
    else{
      alert(`No hay suficiente stock para la compra ingrese un valor menor o igual a ${diffProd01Stock}`);
      menu();    
    }
  }
}

function perfumina(){
  perfPurchase = parseInt(prompt(`Ingrese cantidad a comprar, precio unidad: $ ${perfProd01Price}`));
  if(perfPurchase === 0 ){
    alert("No se ha seleccionado ninguna cantidad");
    menu();
  }
  else{
    if (perfPurchase <= perfProd01Stock){
      perfProd01Stock -= perfPurchase; // reduzco cantidad a comprar del stock
      totalAmountProd += perfPurchase; // agrego la cantidad de productos totales
      montoPerfu = perfPurchase * perfProd01Price;
      alert(`Gracias por comprar ${perfPurchase} Perfuminas`);
      menu();
    }
    else{
      alert(`No hay suficiente stock para la compra ingrese un valor menor o igual a ${perfProd01Stock}`);
      menu();    
    }
  }
}

function checkOut(){
  if(totalAmountProd === 0){
    alert("Añada productos al carrito antes del checkout");
    menu();
  }else{
    totalPrice = montoDifu + montoPerfu + montoVelas;
    alert(`${userName} gracias por tu compra total de: $${totalPrice}!`);
  }
}

menu();
