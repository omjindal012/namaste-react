import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold">Cart</div>

      <div className="w-6/12 m-auto">
        <div>
          <button
            className="cursor-pointer p-2 m-2 bg-black text-white rounded-xl"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length == 0 && <h1>Please add items to the cart!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
