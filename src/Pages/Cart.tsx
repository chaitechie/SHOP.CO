import {RootState} from '../store/store';
import {  useSelector} from "react-redux";
function Cart() {
  const {cart} = useSelector((state:RootState) => state.cart);
  console.log(cart)
  return (
    <div>Cart</div>
  )
}

export default Cart