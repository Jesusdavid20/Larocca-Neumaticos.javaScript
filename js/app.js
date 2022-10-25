// // let stockTires = [
// //     { id: 1, marca: "Bridgestone", modelo: "EP150", medida: "195/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 4, precio: 14000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 2, marca: "Bridgestone", modelo: "Turanza ER300", medida: "205/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 8, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 3, marca: "Firestone", modelo: "FH900", medida: "195/65R15", tipo: "auto", descripcion: "", cantidad: 1, stock: 2, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 4, marca: "Bridgestone", modelo: "H/T 684", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 6, precio: 45000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 5, marca: "Firestone", modelo: "CV 5000", medida: "195/75R16", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 10, precio: 40000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 6, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 7, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 8, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 9, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 10, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 11, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// //     { id: 12, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// // ]

// const cartContent = document.querySelector("#cartContent")

// const productsList = document.querySelector(".wrapProducts")

// const contadorCarrito = document.querySelector("#contadorCarrito")

// const totalPriceCart = document.querySelector("#totalPrice")

// const localApi = "../js/data.json";


// const cart = []

// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("cart")) {
//         cart = JSON.parse(localStorage.getItem("cart"))
//         updateCart()
//     }
// })

// // async function callApi() {
// //     const answers = await fetch(localApi)
// //     const data = await answers.json()
// //     console.log(data)
// // }


// fetch(localApi)
// .then(res => res.json())
// .then(respuesta => {
//     respuesta.forEach((neumatico) => {
//         const div = document.createElement("div")
//         div.classList.add("neumatico")
//         div.innerHTML = `
//         <img src="${neumatico.img}" alt="Neumatico-${neumatico.id}" >
//         <h3> ${neumatico.marca} ${neumatico.modelo}</h3>
//         <h3> ${neumatico.medida}</h3>
//         <p>Precio:$ ${neumatico.precio}</p>
//         <button id="agregar${neumatico.id}" class= "agregarCarrito">Agregar <i class="bi bi-cart-plus-fill"></i></button>
//         `
//         productsList.appendChild(div)

//         const botonCarrito = document.querySelector(`#agregar${neumatico.id}`)
//         botonCarrito.addEventListener("click", () => {
//             swal("Añadiste al carrito", {
//                 buttons: ["Cerrar", "Esta bien"],
//             })
//             addToCart(neumatico.id)
//         })
//     })

// })
// .catch(err => console.error(err));



// const addToCart = (neumaticoID) => {
//     const noRepeat = cart.some(item => item.id === neumaticoID)

//     if (noRepeat) {
//         const item = cart.map(item => {
//             if (item.id === neumaticoID) {
//                 item.cantidad++
//             }
//         })
//     } else {
//         const item = respuesta.find((neumatico) => neumatico.id === neumaticoID)
//         cart.push(item)
//         console.log(cart)
//     }

//     updateCart()
// }

// const eliminarItmen = (neumaticoID) => {
//     const item = cart.find((neumatico) => neumatico.id === neumaticoID)
//     const indice = cart.indexOf(item)
//     cart.splice(indice, 1)
//     updateCart()
// }

// const updateCart = () => {
//     cartContent.innerHTML = ""

//     cart.forEach((item) => {
//         const div = document.createElement("div")
//         div.classList.add(`itemCarrito`)
//         div.innerHTML = `
//         <p>${item.marca} ${item.modelo} - ${item.medida}</p>
//         <p>${item.precio}</p>
//         <p>Cantidad <span id="cantidad"></span> ${item.cantidad}</p>
//         <button onclick ="eliminarItmen(${item.id})" class="botonEliminar"> <i class="bi bi-trash3"></i></button>
//         `
//         cartContent.appendChild(div)

//         localStorage.setItem("cart", JSON.stringify(cart))
//     })

//     contadorCarrito.innerText = cart.length
//     totalPriceCart.innerText = cart.reduce((accumulated, item) => accumulated + item.precio, 0)
// }












// let stockNeumaticos = [
//     { id: 1, marca: "Bridgestone", modelo: "EP150", medida: "195/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 4, precio: 14000, displonible: true, img: `./assets/imagenVacia.jpg` },
//     { id: 2, marca: "Bridgestone", modelo: "Turanza ER300", medida: "205/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 8, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
//     { id: 3, marca: "Firestone", modelo: "FH900", medida: "195/65R15", tipo: "auto", descripcion: "", cantidad: 1, stock: 2, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
//     { id: 4, marca: "Bridgestone", modelo: "H/T 684", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 6, precio: 45000, displonible: true, img: `./assets/imagenVacia.jpg` },
//     { id: 5, marca: "Firestone", modelo: "CV 5000", medida: "195/75R16", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 10, precio: 40000, displonible: true, img: `./assets/imagenVacia.jpg` },
//     { id: 6, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
// ]

// const contenidoCarrito = document.querySelector("#contenidoCarrito")

// const listaProductos = document.querySelector(".wrapProducts")

// const contadorCarrito = document.querySelector("#contadorCarrito")

// const totalPriceCart = document.querySelector("#totalPrice")

// const botonPrueba = document.querySelector("#prueba")

// const carrito = []

// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("carrito")) {
//         carrito = JSON.parse(localStorage.getItem("carrito"))
//         actualizarCarrito()
//     }
// })
// console.log(botonPrueba)
// botonPrueba.addEventListener("click" , () => {
//     swal("Hola")
// })

// stockNeumaticos.forEach((neumatico) => {
//     const div = document.createElement("div")
//     div.classList.add("neumatico")
//     div.innerHTML = `
//     <img src="${neumatico.img}" alt="Neumatico-${neumatico.id}" >
//     <h3> ${neumatico.marca} ${neumatico.modelo}</h3>
//     <h3> ${neumatico.medida}</h3>
//     <p>Precio:$ ${neumatico.precio}</p>
//     <button id="agregar${neumatico.id}" class= "agregarCarrito">Agregar <i class="bi bi-cart-plus-fill"></i></button>
//     `
//     listaProductos.appendChild(div)

//     const botonCarrito = document.querySelector(`#agregar${neumatico.id}`)
//     botonCarrito.addEventListener("click", () => {
//         swal("Añadiste al carrito", {
//             buttons: ["Cerrar" , "Esta bien"],
//         }) 
//         agregarAlCarrito(neumatico.id)
//     })
// })

// const agregarAlCarrito = (neumaticoID) => {
//     const noRepeat = carrito.some(item => item.id === neumaticoID)

//     if (noRepeat) {
//         const item = carrito.map(item => {
//             if (item.id === neumaticoID) {
//                 item.cantidad++
//             }
//         })
//     } else {
//         const item = stockNeumaticos.find((neumatico) => neumatico.id === neumaticoID)
//         carrito.push(item)
//         console.log(carrito)
//     }

//     actualizarCarrito()
// }

// const eliminarItmen = (neumaticoID) => {
//     const item = carrito.find((neumatico) => neumatico.id === neumaticoID)
//     const indice = carrito.indexOf(item)
//     carrito.splice(indice, 1)
//     actualizarCarrito()
// }

// const actualizarCarrito = () => {
//     contenidoCarrito.innerHTML = ""

//     carrito.forEach((item) => {
//         const div = document.createElement("div")
//         div.classList.add(`itemCarrito`)
//         div.innerHTML = `
//         <p>${item.marca} ${item.modelo} - ${item.medida}</p>
//         <p>${item.precio}</p>
//         <p>Cantidad <span id="cantidad"></span> ${item.cantidad}</p>
//         <button onclick ="eliminarItmen(${item.id})" class="botonEliminar"> <i class="bi bi-trash3"></i></button>
//         `
//         contenidoCarrito.appendChild(div)

//         localStorage.setItem("carrito", JSON.stringify(carrito))
//     })

//     contadorCarrito.innerText = carrito.length
//     totalPriceCart.innerText = carrito.reduce((accumulated, item) => accumulated + item.precio, 0)
// }

let stockNeumaticos = [
    { id: 1, marca: "Bridgestone", modelo: "EP150", medida: "195/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 4, precio: 14000, displonible: true, img: `./assets/imagenVacia.jpg` },
    { id: 2, marca: "Bridgestone", modelo: "Turanza ER300", medida: "205/55R16", tipo: "auto", descripcion: "", cantidad: 1, stock: 8, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
    { id: 3, marca: "Firestone", modelo: "FH900", medida: "195/65R15", tipo: "auto", descripcion: "", cantidad: 1, stock: 2, precio: 21000, displonible: true, img: `./assets/imagenVacia.jpg` },
    { id: 4, marca: "Bridgestone", modelo: "H/T 684", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 6, precio: 45000, displonible: true, img: `./assets/imagenVacia.jpg` },
    { id: 5, marca: "Firestone", modelo: "CV 5000", medida: "195/75R16", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 10, precio: 40000, displonible: true, img: `./assets/imagenVacia.jpg` },
    { id: 6, marca: "Bridgestone", modelo: "M/T 674", medida: "265/65R17", tipo: "camioneta", descripcion: "", cantidad: 1, stock: 12, precio: 75000, displonible: true, img: `./assets/imagenVacia.jpg` },
]

const productsList = document.querySelector(".wrapProducts")

const insideTheCart = document.querySelector("#cartContent")

const emptyCart = document.querySelector('#emptyCart')

const cartCounter = document.querySelector("#modalCounter")

const accumulated = document.querySelector("#accumulated")

const totalPrice = document.querySelector("#totalPrice")

const localApi = "../js/data.json"

let cart = []

fetch(localApi)
    .then(answer => answer.json())
    .then(data => {
        data.forEach((tyre) => {
            const div = document.createElement("div")
            div.classList.add("tyre")
            div.innerHTML = `
            <img src="${tyre.img}" alt="Neumatico-${tyre.id}" >
            <h3> ${tyre.brand} ${tyre.model}</h3>
            <h3> ${tyre.size}</h3>
            <p>Precio:$ ${tyre.price}</p>
            <button id="agregar${tyre.id}" class= "addToCart">Agregar <i class="bi bi-cart-plus-fill"></i></button>
            `
            productsList.appendChild(div)

            const cartButton = document.querySelector(`#agregar${tyre.id}`)
            cartButton.addEventListener("click", () => {
                swal("Añadiste al carrito", {
                    buttons: ["Cerrar", "Esta bien"],
                })
                addToCart(tyre.id)
            })
        })


        document.addEventListener("DOMContentLoaded", () => {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"))
                refreshCart()
            }
        })

        emptyCart.addEventListener('click', () => {
            cart.length = 0
            refreshCart()
        })

        const addToCart = (prodId) => {

            const exists = cart.some(prod => prod.id === prodId)

            if (exists) {
                const prod = cart.map(prod => {
                    if (prod.id === prodId) {
                        prod.qty++
                    }
                })
            } else {
                const item = data.find((prod) => prod.id === prodId)
                cart.push(item)
            }
            refreshCart()
        }

        
        const refreshCart = () => {
            
            insideTheCart.innerHTML = ""
            const deleteItemCart = (prodId) => {
                const item = cart.find((prod) => prod.id === prodId)
    
                const indice = cart.indexOf(item)
    
                cart.splice(indice, 1)
                refreshCart()
                console.log(deleteItemCart)
            }

            cart.forEach((item) => {
                const div = document.createElement("div")
                div.classList.add(`itemCarrito`)
                div.innerHTML = `
        <p>${item.brand} ${item.model} - ${item.size}</p>
        <p>${item.price}</p>
        <p>Cantidad <span id="cantidad"></span> ${item.qty}</p>
        <button onclick="deleteItemCart(${item.id}" class="deleteButton"> <i class="bi bi-trash3-fill"></i></button>
        `

                insideTheCart.appendChild(div)

                localStorage.setItem("cart", JSON.stringify(cart))

            })

            cartCounter.innerText = cart.length

            console.log(cart)
            totalPrice.innerText = cart.reduce((acc, prod) => acc + prod.qty * prod.price, 0)
        }
    })
