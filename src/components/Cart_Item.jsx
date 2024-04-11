import { ShoppingCart } from "lucide-react";
import React from "react";

function Cart_Item() {
  return (
    <div className="cart_container">
      {" "}
      <ShoppingCart />
      <span
        className="
     border-solid rounded-full w-6 h-6 flex items-center justify-center bg-red-500"
      >
        6
      </span>
    </div>
  );
}

export default Cart_Item;
