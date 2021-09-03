  const product = { count: 10, price: 12.55, type: "alimentacion" };
  //PRODUCTOS DIFERENTES PARA PROBAR TIPOS:
  //const product = { count: 2, price: 18.95, type: "libro" };
  //const product = { count: 1, price: 43.50, type: "ropa" };

  let total = 0;

  let unitVat;
   switch (product.type) {
    case "alimentacion":
      unitVat = product.price * 0.10;
      break;
    case "libro":
      unitVat = product.price * 0.04;
      break;
    default:
      unitVat = product.price * 0.21;
    }

    unitVat = Math.round(unitVat * 100) / 100;
  
  console.log("El IVA por unidad corresponde a: " + unitVat + "€");
  console.log("-----------------------------------------------------------------------------------------------");

  //APLICANDO IF:
  function getVat (){

  if (product.type === "alimentacion" && product.count > 0) {
    total = product.count * (product.price * 0.10);
  } else if (product.type === "libro" && product.count > 0) {
    total = product.count * (product.price * 0.04);
  } else {
    total = product.count * (product.price * 0.21);
  }
  return total;
  }

  let vat = Math.round(getVat() * 100) / 100;
  console.log("El importe correspondiente al IVA de todas las unidades es: " + vat + "€");
  console.log("-----------------------------------------------------------------------------------------------");

  //APLICANDO SWITCH:
  switch (product.type) {
    case "alimentacion":
      total = product.count * (product.price * 0.10 + product.price);
      break;
    case "libro":
      total = product.count * (product.price * 0.04 + product.price);
      break;
    default:
      total = product.count * (product.price * 0.21 + product.price);
  } 

  total = Math.round(total * 100) / 100;
  console.log("El total de todas las unidades con el IVA añadido es: " + total + "€");
  console.log("-----------------------------------------------------------------------------------------------");




