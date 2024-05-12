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
      <div className="flex gap-3">
        <button onClick={incrementar} className="p-3 rounded-xl">
          +
        </button>
        <p> {numero} </p>
        <button onClick={decrementar} className="p-3 rounded-xl">
          -
        </button>
      </div>
      <button onClick={confirmar}>Confirmar cantidad</button>
    </div>
  );
}
export default Contador
