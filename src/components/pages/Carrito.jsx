import userCart from "../../hooks/userCart";
import {createSale} from "../../utils";

import { toast } from "react-toastify";

function Carrito() {
  const { carrito } = userCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    createSale();
    toast.success("Compra registrada");
  };
  return (
    <div>
      <h4 className="text 2xl">Carrito</h4>
      <div>
        {carrito.map((item) => {
          return <p>Articulo</p>;
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="nombre" />
        </div>
        <div>
          <input type="number" placeholder="telefono" />
        </div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <button>Comprar</button>
      </form>
    </div>
  );
}
export default Carrito;
