
let neumatico1 = {
    nombre : "195/55R16 Bridgestone EP150",
    precio : 14000,
    stock : 4  
}

// let neumatico1 = 14000;
// let stockNeumatico1 =
// let neumatico1Nombre = "195/55R16 Bridgestone EP150";

let neumatico2 = {
    nombre : "205/55R16 Bridgestone Turanza ER300",
    precio : 21000,
    stock : 8
}

// let neumatico2 = 18000;
// let neumatico2Nombre = "205/55R16 Bridgestone Turanza ER300";

let neumatico3 = {
    nombre : "195/65R15 Firestone FH900",
    precio : 25000,
    stock : 5
}

// let neumatico3 = 21000;
// let neumatico3Nombre = "195/65R15 Firestone FH900";

//El usuario ingresa que cantidad del neumatico 1 quiere comprar:

let seleccion1 = parseInt(prompt(`el neumatico ${neumatico1.nombre} tiene un precio de ${neumatico1.precio} que cantidad desea?`));
if (seleccion1 <= neumatico1.stock) {
    let resultado1 = neumatico1.precio * seleccion1;
    let respuesta = prompt(`Usted a seleccionado ${seleccion1} neumaticos y tiene un valor total de ${resultado1}, Desea seguir comprando?`)

    //El usuario ingresa que cantidad del neumatico 2 quiere comprar:
    if (respuesta == "si") {
        let seleccion2 = parseInt(prompt(`el neumatico ${neumatico2.nombre} tiene un precio de ${neumatico2.precio} que cantidad desea?`));
        if (seleccion2 <= neumatico2.stock) {
            let resultado2 = neumatico2.precio * seleccion2;
            let respuesta2 = prompt(`Usted a seleccionado ${seleccion2} neumaticos y tiene un valor total de ${resultado2}, desea seguir comprando?`);

            //El usuario ingresa que cantidad del neumatico 3 quiere comprar:
            if (respuesta2 == "si") {
                let seleccion3 = parseInt(prompt(`el neumatico ${neumatico3.nombre} tiene un precio de ${neumatico3.precio} que cantidad desea?`));
                if (seleccion3 <= neumatico3.stock) {
                    let resultado3 = neumatico3.precio * seleccion3;
                    alert(`Usted a seleccionado ${seleccion3} neumaticos y tiene un valor total de ${resultado3}`)

                    calculoDelTotal()
                } else if (seleccion3 > neumatico3.stock) {
                    alert("No tenemos esa cantidad en stock, por favor intente de nuevo");

                } else if (seleccion2 > neumatico2.stock) {
                    alert("No tenemos esa cantidad en stock, por favor intente de nuevo")
                }
            } else {
                alert("gracias por su tiempo...")

                calculoDelTotal()
            }
        } else if (seleccion2 > neumatico2.stock) {
            alert("No tenemos esa cantidad en stock, por favor intente de nuevo")
        }
    } else {
        alert("gracias por su tiempo...")
        
        calculoDelTotal()
    }
} else if (seleccion1 > neumatico1.stock) {
    alert("No tenemos esa cantidad en stock, por favor intente de nuevo")
}

function calculoDelTotal() {
    let sumaTotal = resultado1 + resultado2 + resultado3;
    let seleccionTotal = Number(seleccion1 + seleccion3 + seleccion2);
    alert(`Usted a comprado ${seleccionTotal} neumaticos en distintas presentaciones y el total a pagar es ${sumaTotal}`);

    let calculoDeCuotas = prompt("como desea realizar el pago, puede hacerlo de contado o en 10, 12 y 18 cuotas?")
    switch (calculoDeCuotas) {
        case "10":
            let precioEn10 = sumaTotal / 10;
            alert(`El precio total le queda en 10 cuotas de ${precioEn10}`);
            break;
        case "12":
            let precioEn12 = sumaTotal / 12;
            alert(`El precio total le queda en 12 cuotas de ${precioEn12}`);
            break;
        case "18":
            let precioEn18 = sumaTotal / 18;
            alert(`El precio total le queda en 18 cuotas de ${precioEn18}`);
            break;
        default:
            alert(`Su monto a pagar es ${sumaTotal} pesos en un solo pago`);
            break;
    }
}