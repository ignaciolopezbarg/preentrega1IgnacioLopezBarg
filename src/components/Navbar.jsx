import Logo from "../img/funkos-banner.webp";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import FunkosMenu from "./FunkosMenu";
import Cart_Item from "./Cart_Item";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-2">
      <div className="flex flex-wrap rounded-xl h-20 w-80 p-0 overflow-hidden">
        <img
          src={Logo}
          alt="Imagen de la tienda Funkoshop"
          className="vibrating-image transition-transform duration-300 ease-in out transform hover:rotate-2"
        />
      </div>

      <div className="hidden md:flex gap-8">
        <FunkosMenu />
        <Link
          to="/ofertas"
          className="hover:bg-teal-300 hidden md:flex rounded-md"
        >
          Ofertas
        </Link>
        <Link
          to="/contacto"
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
