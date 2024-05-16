import { useState } from "react";

function Contador(props) {
  const [numero, setNumero] = useState(0);
  const incrementar = () => {
    setNumero(numero + 1);
  };
  const decrementar = () => {
    setNumero(numero - 1);
  };
  const confirmar = () => {
    props.handleConfirm(numero);
  };
  return (
    <div>
      <div className="flex gap-5">
  <button onClick={incrementar} className="p-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white">
    +
  </button>
  <p>{numero}</p>
  <button onClick={decrementar} className="p-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white">
    -
  </button>
</div>

      <button onClick={confirmar} className=" p-4 rounded-xl bg-red-500 hover:bg-red-600 text-white">Confirmar cantidad</button>
    </div>
  );
}
export default Contador
