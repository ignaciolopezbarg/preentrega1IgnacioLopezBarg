import Logo from "../../img/funkos-banner.webp";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import FunkosMenu from "../widgets/FunkosMenu";
import CartWidget from "../widgets/CartWidget";


function Navbar() {

  return (
    <nav className="flex items-center justify-center gap-2">
      <div className="flex flex-wrap rounded-xl h-20 max-w-1200 mx-auto p-0 overflow-hidden">
        <Link to="/">
          <img
            src={Logo}
            alt="Imagen de la tienda Funkoshop"
            className="vibrating-image transition-transform duration-300 ease-in out transform hover:rotate-2"
          />
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        <FunkosMenu />

        <Link
          to="/contacto"
          className="hover:bg-teal-300 hidden md:flex rounded-md"
        >
          Contacto
        </Link>
        <CartWidget />
      </div>
    </nav>
  );
}
export default Navbar;
