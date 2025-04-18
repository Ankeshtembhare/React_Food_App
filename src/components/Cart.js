import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {

    const cartItem = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }


    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">CART</h1>
            <div className="w-6/12 m-auto" >
                <button className="p-2 m-2 bg-green-100 text-black rounded-lg"
                onClick={handleClearCart}
                >Clear cart</button>
                {cartItem.length === 0 && (
                    <h1>cart is empty . add items to the cart</h1>
                )}
                <ItemList items={cartItem}/>
            </div>
        </div>
    );
};

export default Cart;