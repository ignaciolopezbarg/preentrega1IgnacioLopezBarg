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
            // className="h-full"
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
