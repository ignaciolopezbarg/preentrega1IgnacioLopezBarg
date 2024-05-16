import React, { useState } from "react";
import { Angry, Annoyed, Laugh } from "lucide-react";
import { toast } from "react-toastify";

function ContadorLikes() {
  const [numeroAngry, setNumeroAngry] = useState(0);
  const [numeroAnnoyed, setNumeroAnnoyed] = useState(0);
  const [numeroLaugh, setNumeroLaugh] = useState(0);
  const [seleccionado, setSeleccionado] = useState(false);

  const incrementar = (contador) => {
    switch (contador) {
      case "Laugh":
        setNumeroLaugh((prevNumero) => prevNumero + 1);
        break;
      case "Angry":
        setNumeroAngry((prevNumero) => prevNumero + 1);
        break;
      case "Annoyed":
        setNumeroAnnoyed((prevNumero) => prevNumero + 1);
        break;
      default:
        break;
    }
  };

  const onPick = (contador, value) => {
    if (!seleccionado) {
      toast.success(
        "Gracias por su opinión, la misma nos ayuda a mejorar!",
        `Su valoración ${value}/3`,
        "success",
        { timer:2000}
      );
      incrementar(contador);
      setSeleccionado(true);
    } else {
      Swal.fire("No puede volver a elegir", "", "warning",
    {timer:1000});
    }
  };

  console.log(numeroAngry, numeroAnnoyed, numeroLaugh);

  return (
    <div className=" bg-slate-200 text-center" >
      <h3>
        <p>Como le resulto el uso de la pagina?</p>
      </h3>
      <section className="flex justify-center "
       >
      <button onClick  ={() => onPick("Angry", 1)}>
        <Angry size={50} />
        <span>{numeroAngry}</span>
      </button>
      <button onClick={() => onPick("Annoyed", 2)}>
        <Annoyed size={50} />
        <span>{numeroAnnoyed}</span>
      </button>
      <button onClick={() => onPick("Laugh", 3)}>
        <Laugh size={50} />
        <span>{numeroLaugh}</span>
      </button>
      </section>
    </div>
  );
}

export default ContadorLikes;
// al cerrar la sesion, otro usuario podra opinar,  los contadores deberian guardarse en alguna bd o local storage, esto ultimo no se ha implementado.Al cerrar la sesion, los mismos vuelven a cero.
