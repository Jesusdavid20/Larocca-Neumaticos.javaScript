/*
let neumatico1 = {
    nombre : "195/55R16 Bridgestone EP150",
    precio : 14000,
    stock : 4  
}


let neumatico2 = {
    nombre : "205/55R16 Bridgestone Turanza ER300",
    precio : 21000,
    stock : 8
}

let neumatico3 = {
    nombre : "195/65R15 Firestone FH900",
    precio : 25000,
    stock : 5
}


let carritoDelUsuario = []

//El usuario ingresa que cantidad del neumatico 1 quiere comprar:

var seleccion1 = parseInt(prompt(`el neumatico ${neumatico1.nombre} tiene un precio de ${neumatico1.precio} que cantidad desea?`));
if (seleccion1 <= neumatico1.stock) {
    var resultado1 = neumatico1.precio * seleccion1;
    var respuesta = prompt(`Usted a seleccionado ${seleccion1} neumaticos y tiene un valor total de ${resultado1}, Desea seguir comprando?`)

    //El usuario ingresa que cantidad del neumatico 2 quiere comprar:
    if (respuesta == "si") {
        var seleccion2 = parseInt(prompt(`el neumatico ${neumatico2.nombre} tiene un precio de ${neumatico2.precio} que cantidad desea?`));
        if (seleccion2 <= neumatico2.stock) {
            var resultado2 = neumatico2.precio * seleccion2;
            var respuesta2 = prompt(`Usted a seleccionado ${seleccion2} neumaticos y tiene un valor total de ${resultado2}, desea seguir comprando?`);

            //El usuario ingresa que cantidad del neumatico 3 quiere comprar:
            if (respuesta2 == "si") {
                var seleccion3 = parseInt(prompt(`el neumatico ${neumatico3.nombre} tiene un precio de ${neumatico3.precio} que cantidad desea?`));
                if (seleccion3 <= neumatico3.stock) {
                    var resultado3 = neumatico3.precio * seleccion3;
                    alert(`Usted a seleccionado ${seleccion3} neumaticos y tiene un valor total de ${resultado3}`)
                    
                    cargarAlCarrito()

                    calculoDelTotal()

                    usandoFilter()

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

function cargarAlCarrito (){
    carritoDelUsuario.push(`CARRITO: \n ${neumatico1.nombre} x ${seleccion1} \n`);
    carritoDelUsuario.push(`${neumatico2.nombre} x ${seleccion2} \n `);
    carritoDelUsuario.push(`${neumatico3.nombre} x ${seleccion3}`)
    alert(carritoDelUsuario)
}

var ingresoNumeros = [];

function usandoFilter(){
    alert("Para concluir ingrese 4 numeros al azar:")
    for (i = 1; i <= 4; i++){
        var numeros = prompt("ingrese un numero");
        ingresoNumeros.push(`\n${numeros}`);
    }
    
    var eleccion = prompt(`\nSus números escogidos son ${ingresoNumeros}. Quieres filtrar los números pares o impares?`)
    
    if (eleccion === "pares" || eleccion === "par" || eleccion === "Pares" || eleccion === "Par" ){
        const resultado = ingresoNumeros.filter(value => value % 2 ===0);
        alert(resultado)
    }else if (eleccion === "impares" || eleccion === "impar" || eleccion === "Impares" || eleccion === "Impar" ){
        const resultado = ingresoNumeros.filter(value => value % 2 != 0);
        alert(resultado)
    }else {
        alert("Seleccion incorrecta")
    }

}

// usandoFilter()

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
*/

let stockNeumaticos = [
    {id: 1,marca: "Bridgestone", modelo:"EP150", medida:"195/55R16", tipo: "auto", descripcion: "", cantidad: 1,stock: 4, precio: 14000,  displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 2,marca: "Bridgestone", modelo:"Turanza ER300", medida:"205/55R16", tipo: "auto", descripcion: "", cantidad: 1,stock: 8, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 3,marca: "Firestone", modelo:"FH900", medida:"195/65R15", tipo: "auto", descripcion: "", cantidad: 1,stock: 2, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 4,marca: "Bridgestone", modelo:"H/T 684", medida:"265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 6, precio: 45000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 5,marca: "Firestone", modelo:"CV 5000", medida:"195/75R16", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 10, precio: 40000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 6,marca: "Bridgestone", modelo:"M/T 674", medida:"265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg`}, 
]

let carrito =[]

const contenidoCarrito = document.querySelector(`#contenidoCarrito`)

 const listaProductos = document.querySelector(".wrapProducts")

 const contadorCarrito = document.querySelector(`#contadorCarrito`)

 stockNeumaticos.forEach((neumatico) =>{
    const div = document.createElement(`div`)
    div.classList.add(`neumatico`)
    div.innerHTML = `
    <img src="${neumatico.img}" alt="" >
    <h3> ${neumatico.marca} ${neumatico.modelo}</h3>
    <h3> ${neumatico.medida}</h3>
    <p>Precio:$ ${neumatico.precio}</p>
    <button id="agregar${neumatico.id}" class= "agregarCarrito">Agregar <i class="bi bi-cart-plus-fill"></i></button>
    `
    listaProductos.appendChild(div)

    const botonCarrito = document.querySelector(`#agregar${neumatico.id}`)
    botonCarrito.addEventListener(`click`, () =>{
        agregarAlCarrito(neumatico.id)
    } )
})
 
const agregarAlCarrito = (neumaticoID) => {
    const item = stockNeumaticos.find((neumatico) => neumatico.id === neumaticoID)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const eliminarItmen = (neumaticoID) =>{
    const item = carrito.find((neumatico) => neumatico.id === neumaticoID)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () =>{
    contenidoCarrito.innerHTML = ""

    carrito.forEach((item) => {
        const div = document.createElement(`div`)
        div.classList.add(`itemCarrito`)
        div.innerHTML = `
        <p>${item.marca} ${item.modelo} - ${item.medida}</p>
        <p>${item.precio}</p>
        <p>Cantidad <span id="cantidad"></span> ${item.cantidad}</p>
        <button onclick ="eliminarItmen(${item.id})" class="botonEliminar"> <i class="bi bi-trash3"></i></button>
        `
        contenidoCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
}