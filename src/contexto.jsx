import { createContext, useState } from "react";
export const contexto = createContext();
const Provider = contexto.Provider;

function CarritoProvider ( props ){
    const [cantCarrito , setCantCarrito] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [ carrito, setCarrito] = useState([])

const comprar = (cant,item) =>{
    setCantCarrito(cantCarrito + cant)
    const el = carrito.slice(0)
    const elementoAgregado = item
    elementoAgregado.cantidad = cant
    el.push(elementoAgregado)
    setCarrito(el)
}

const sacandoDelCarrito = (id)=> {
    console.log ('sacando del carrito')
}

const vaciandoCarrito = () =>{
    console.log ('vaciando')
    setCantCarrito(0)
    setCarrito([])
}

const ubicacionEnCarrito = (id) =>{
    console.log ('buscando en el carrito')
}

const carritoActualizado = {
    carrito: carrito,
    cantCarrito : cantCarrito,
    precio : precio,
    comprar : comprar,
    sacandoDelCarrito: sacandoDelCarrito,
    vaciandoCarrito: vaciandoCarrito,
    ubicacionEnCarrito: ubicacionEnCarrito
}
 return (
    <Provider value={carritoActualizado}>
        {props.children}
    </Provider>
 )}
 export default CarritoProvider;