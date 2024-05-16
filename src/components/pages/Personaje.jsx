import { toast } from "react-toastify";
import userCart from "../../hooks/userCart";
import Contador from "../widgets/Contador";

function Personaje(props) {
  const ValorDelContexto = userCart();
  const handleConfirm = (numero) => {
    ValorDelContexto.comprar(numero, props.character);
    toast.success("Producto agregado al carrito");
  };
  return (
    <>
      <h3 className="mb-15 text-3xl font-bold text-black ">
        {props.character.name}{" "}
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            // className="w-full rounded-md max-h-[200px] lg:w-auto object-cover"
            className="w-full rounded-md max-h-[400px] lg:w-auto object-cover hover:scale-110 transition-transform duration-300"
            src={"/img/" + props.character.img}
            alt={props.character.name}
          />
        </div>{" "}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-3 text-2xl text-bold">Precio</h3>
            <p className="text-3xl text-bold">$ {props.character.price} </p>
            <h3 className="mb-3 text-2xl text-bold">Descripcion</h3>
            <p className="text-xl ">{props.character.description} </p>
          </div>
          <div>
          <h3 className="mb-3 text-2xl text-bold">Mas Informacion</h3>
            <p className="text-xl ">{props.character.datos} </p>
          </div>

          <Contador handleConfirm={handleConfirm} />
        </div>
      </section>
    </>
  );
}
export default Personaje;
