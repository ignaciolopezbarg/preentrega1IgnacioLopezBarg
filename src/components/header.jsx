import { Bike } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header class="bg-teal-200 text-white  p-2 shadow transition-colors duration-700 hover:bg-teal-400 ">
      <nav class="flex flex-row h-14 justify-between items-center">
        <a
          class="bg-green-400 rounded  transition-colors duration-400 hover:bg-green-200 rotate-2"
          href="#"
        >
          <Bike size="40" />
        </a>
        <a
          class="bg-red-400 rounded  transition-colors duration-400 hover:bg-blue-200 rotate-2"
          href="#"
        >
          <Bike size="40" />
        </a>

        <section class="p-1 -ml-55 text-slate-700 bg-gray-200 rounded-lg shadow-md">
          <p class="font-bold text-2xl">TODO 2RUEDAS2</p>
        </section>
        <div class=" p-0 flex flex-row w-80 h-13 justify-between items-center">
          <a class="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto " href="#">
            SHOP
          </a>
          <a class="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto" href="#">
            REGISTRO
          </a>
          <a class="font-serif text-sm text-blue-800 hover:bg-slate-100 w-auto h-auto" href="#">
            FAQ
          </a>
          <section class="flex flex-col items-center -ml-10">
            <a class="font-mono size-10 p-2 -ml-3  hover:bg-slate-100 h-auto" href="#">
              <ShoppingCart />
            </a>
            <p class="text-blue-800 text-xs bg-red-400 rounded-full w-5 h-5 flex items-center justify-center -ml-2">4</p>
          
          </section>
        </div>
      </nav>
    </header>
  );
}
export default Header;
