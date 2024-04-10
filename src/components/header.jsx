import { Bike } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Boton from "./cart.jsx";
import Contador from "./contador.jsx";
import { useState } from "react";

function Header() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <header className="bg-teal-200 text-white w-auto p-2 shadow transition-colors duration-700 hover:bg-teal-400 ">
      <nav className="flex flex-row h-14 justify-between items-center">
        <a
          className="bg-green-400 rounded  transition-colors duration-400 hover:bg-green-200 rotate-2"
          href="#"
        >
          <Bike size="40" />
        </a>
        <a
          className="bg-red-400 rounded  transition-colors duration-400 hover:bg-blue-200 rotate-2"
          href="#"
        >
          <Bike size="40" />
        </a>

        <section className="p-1 -ml-55 text-slate-700 bg-gray-200 rounded-lg shadow-md">
          <p class="font-bold text-2xl">TODO 2RUEDAS2</p>
        </section>
        <div className=" p-0 flex flex-row w-80 h-13 justify-between items-center">
          <a
            className="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto "
            href="#"
          >
            SHOP
          </a>
          <a
            className="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto"
            href="#"
          >
            REGISTRO
          </a>
          <a
            className="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto"
            href="#"
          >
            FAQ
          </a>
        </div>
        <section className="contenedor-carrito ">
          <Contador numClics={numClics} />

          <Boton>
            <Button class="bg-slate-300 rounded-full w-8 h-5 border-solid border-1 border-red-500 font-medium">
              texto='Comprar' esBotonClic ={true}
              manejarClic={manejarClic}
            </Button>
            <Button class="bg-slate-400 rounded-full w-8 h-5 border-solid border-1 border-red-500 font-medium">
              texto='Reiniciar' esBotonClic ={false}
              manejarClic={reiniciarContador}
            </Button>
          </Boton>
        </section>
      </nav>
    </header>
  );
}
export default Header;
