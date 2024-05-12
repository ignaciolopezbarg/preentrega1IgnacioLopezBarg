import { ShoppingCart } from "lucide-react";
import userCart from "../../hooks/userCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const elValorDelContexto = userCart();
  return (
    <Link to="/cart" className="flex items-center">
      <ShoppingCart />
      {elValorDelContexto.cantCarrito}
    </Link>
  );
};
export default CartWidget;
