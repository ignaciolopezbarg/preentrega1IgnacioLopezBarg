import { useContext } from "react";
import {contexto} from "../contexto";

const useCart = () =>{
    const carritoActualizado = useContext(contexto)
    return carritoActualizado;
}
    export default useCart;