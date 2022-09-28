let stockNeumaticos = [
    {id: 1,marca: "Bridgestone", modelo:"EP150", medida:"195/55R16", tipo: "auto", descripcion: "", cantidad: 1,stock: 4, precio: 14000,  displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 2,marca: "Bridgestone", modelo:"Turanza ER300", medida:"205/55R16", tipo: "auto", descripcion: "", cantidad: 1,stock: 8, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 3,marca: "Firestone", modelo:"FH900", medida:"195/65R15", tipo: "auto", descripcion: "", cantidad: 1,stock: 2, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 4,marca: "Bridgestone", modelo:"H/T 684", medida:"265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 6, precio: 45000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 5,marca: "Firestone", modelo:"CV 5000", medida:"195/75R16", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 10, precio: 40000, displonible: true, img: `./assets/imagenVacia.jpg`},
    {id: 6,marca: "Bridgestone", modelo:"M/T 674", medida:"265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1,stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg`}, 
]

// import {stockNeumaticos} from `./stock`

const contenidoCarrito = document.querySelector("#contenidoCarrito")

const listaProductos = document.querySelector(".wrapProducts")

const contadorCarrito = document.querySelector("#contadorCarrito")

const totalPriceCart = document.querySelector("#totalPrice")

const carrito =[]

document.addEventListener("DOMContentLoaded", () => {
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    actualizarCarrito()
}
})

 stockNeumaticos.forEach((neumatico) => {
    const div = document.createElement("div")
    div.classList.add("neumatico")
    div.innerHTML = `
    <img src="${neumatico.img}" alt="Neumatico-${neumatico.id}" >
    <h3> ${neumatico.marca} ${neumatico.modelo}</h3>
    <h3> ${neumatico.medida}</h3>
    <p>Precio:$ ${neumatico.precio}</p>
    <button id="agregar${neumatico.id}" class= "agregarCarrito">Agregar <i class="bi bi-cart-plus-fill"></i></button>
    `
    listaProductos.appendChild(div)

    const botonCarrito = document.querySelector(`#agregar${neumatico.id}`)
    botonCarrito.addEventListener("click", () => {
        agregarAlCarrito(neumatico.id)
    } )
})
 
const agregarAlCarrito = (neumaticoID) => {
    const noRepeat = carrito.some(item => item.id === neumaticoID)

    if(noRepeat){
        const item = carrito.map(item => {
            if(item.id === neumaticoID){
                item.cantidad++
            }
        })
    }else {      
        const item = stockNeumaticos.find((neumatico) => neumatico.id === neumaticoID)
        carrito.push(item)
        console.log(carrito)
    }

    actualizarCarrito()
}

const eliminarItmen = (neumaticoID) => {
    const item = carrito.find((neumatico) => neumatico.id === neumaticoID)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = ""

    carrito.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add(`itemCarrito`)
        div.innerHTML = `
        <p>${item.marca} ${item.modelo} - ${item.medida}</p>
        <p>${item.precio}</p>
        <p>Cantidad <span id="cantidad"></span> ${item.cantidad}</p>
        <button onclick ="eliminarItmen(${item.id})" class="botonEliminar"> <i class="bi bi-trash3"></i></button>
        `
        contenidoCarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    totalPriceCart.innerText = carrito. reduce((accumulated, item) => accumulated + item.precio, 0)
}