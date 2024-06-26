import React, { useState } from "react";
import Input from '../widgets/Input';
import ContadorLikes from "../widgets/ContadorLikes";

function Contacto() {
  const [aviso, setAviso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleronMouseLeave = (e) => {
    e.target.value === "" ? setAviso(true) : setAviso(false);
  };

  return (
    <div className="formulario flex flex-col  bg-slate-400 p-4 mt-4 w-1/2 mx-auto justify-center align-middle rounded-xl">
      <h2 className="formulario__title text-4xl text-white text-center">
        INGRESAR A MI CUENTA
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-25 p-3 gap-3 ">
          <input
            onMouseLeave={handleronMouseLeave}
            type="text"
            placeholder="Nombre"
            className="text-black w-1/2 h-10 mx-auto mb-4 rounded-md shadow-md"
          />
          {/* {aviso && <p>Complete su nombre y apellido</p>} */}

          <input
            onMouseLeave={handleronMouseLeave}
            type="text"
            placeholder="Apellido"
            className="text-black w-1/2 h-10 mx-auto mb-4 rounded-md shadow-md"
          />
          {aviso && <p>Complete su nombre y apellido</p>}
          <input
            type="email"
            placeholder="email"
            className="text-black w-1/2 h-10 mx-auto mb-4 rounded-md shadow-md"
          />
          <input
            type="password"
            placeholder="ingrese su clave"
            className="text-black  w-1/2 h-10 mx-auto mb-4 rounded-md shadow-md"
          />

          <button class="bg-blue-400 hover:bg-blue-700 text-white w-1/5 mx-auto font-bold py-2 px-4 rounded">
            Ingresar
          </button>
        </div>
      </form>
      <form action="">
      
    
      </form>
      <h3 className="text-2xl text-bold text-blue-900 text-center">Nos gustaria conocer su experiencia con el uso de la pagina</h3>
      <ContadorLikes />
    </div>
   
  );
}

export default Contacto;
