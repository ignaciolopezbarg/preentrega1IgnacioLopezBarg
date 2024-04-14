import Logo from "../img/funkos-banner.webp";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import Cart_Item from "./Cart_Item";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-2">
      <div className="flex flex-wrap rounded-xl h-20 w-80 p-0 overflow-hidden">
        <Link to="/" className="flex p-1 pl-2 hover:bg-white ">
          <img
            src={Logo}
            alt="Imagen de la tienda Funkoshop"
            className= "vibrating-image transition-transform duration-300 ease-in out transform hover:rotate-2"
          />
        </Link>
      </div>

      <div className="flex md:gap-8">
        <Link
          to="/muñecos"
          className="hover:bg-teal-300 hidden md:flex rounded-md"
        >
          Funkos
        </Link>
        <Link
          to="/ofertas"
          className="hover:bg-teal-300 hidden md:flex rounded-md"
        >
          Ofertas
        </Link>
        <Link
          to="/contact"
          className="hover:bg-teal-300 hidden md:flex rounded-md"
        >
          Contacto
        </Link>
      </div>
      <MenuIcon width={20} height={20} className="md:hidden" />
      <div className="cart_container">
        <Cart_Item />
      </div>
    </nav>
  );
}
export default Navbar;

// import React from "react";
// import FunkosMenu from "./FunkosMenu.jsx";
// import Logo from "../img/funkos-banner.webp";
// import { Link } from "react-router-dom";
// import { MenuIcon } from "lucide-react";
// import Cart_Item from "./Cart_Item";

// function Navbar() {
//   return (
//     <nav className="max-w-3xl mx-auto flex items-center justify-between gap-2 px-4 py-2 md:px-0">
//       <div className="flex flex-wrap rounded-xl h-20 w-80 p-0 overflow-hidden">
//         <Link to="/" className="flex p-1 items-center gap-2">
//           <img
//             src={Logo}
//             alt="Imagen de la tienda Funkoshop"
//             // className="h-10 rounded-xl md:h-auto md:w-48 lg:w-68"
//           />
//         </Link>
//       </div>
//       <div className="hidden md:flex gap-8">
//        {/* // <FunkosMenu /> Aquí se renderiza FunkosMenu */}
//         <Link to="/ofertas" className="hover:bg-teal-300 rounded-md px-2 py-1">
//           Ofertas
//         </Link>
//         <Link to="/contacto" className="hover:bg-teal-300 rounded-md px-2 py-1">
//           Contacto
//         </Link>
//       </div>
//       <MenuIcon width={20} height={20} className="md:hidden" />
//       <div className="cart_container">
//         <Cart_Item />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// //  import FunkosMenu from "./FunkosMenu.jsx";

// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

 
  
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ChevronDown, Menu as MenuIcon } from "lucide-react";
// // import Logo from "../img/funkos-banner.webp";
// // import FunkosMenu from "./FunkosMenu.jsx"; // Importa el componente FunkosMenu
// // import Contacto from "../pages/Contacto.jsx"; // Importa el componente Contacto
// // import Ofertas from "../pages/Ofertas.jsx"; // Importa el componente Ofertas
// // import CartItem from "./Cart_Item.jsx"; // Importa el componente CartItem

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="max-w-3xl mx-auto flex items-center justify-between gap-2 px-4 py-2 md:px-0">
// //       <Link to="/" className="flex items-center gap-2">
// //         <img
// //           src={Logo}
// //           alt="Imagen de la tienda Funkoshop"
// //           className="h-10 rounded-xl md:h-auto md:w-48 lg:w-68"
// //         />
// //       </Link>

// //       <div className="relative">
// //         <button
// //           onClick={toggleMenu}
// //           className="hover:bg-teal-300 rounded-md px-2 py-1 flex items-center focus:outline-none "
// //         >
// //           <span className="">Funkos</span>
// //           <ChevronDown />
// //         </button>
// //         {isOpen && <FunkosMenu />}
// //       </div>

// //       <Link to="/ofertas" className="hover:bg-teal-300 rounded-md px-2 py-1">
// //         Ofertas
// //       </Link>
// //       <Link to="/contacto" className="hover:bg-teal-300 rounded-md px-2 py-1">
// //         Contacto
// //       </Link>

// //       <div className="cart_container">
// //         <CartItem />
// //       </div>

// //       <MenuIcon width={20} height={20} className="md:hidden" />
// //     </nav>
// //   );
// // }

// // export default Navbar;
