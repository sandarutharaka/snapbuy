import { Minus ,Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "@/store/shop/cart-slice";

function UserCartContent({ cartItem }) {

  const {user}=useSelector(state=>state.auth)
  const dispatch =useDispatch()

  function handleCartItemDelete(getCartItem)
  {
    
    dispatch(deleteCartItem({userId : user?.id , productId : getCartItem?.productId}))
  }

  return (
    <div className="flex items-center space-x-4 ">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold capitalize">{cartItem?.title}</h3>
        <div className="flex item-center mt-1 gap-2">
            <Button variant="outline" size="icon" className='h-8 w-8 rounded-full'>
                <Minus className="w-4 h-4"/>
                <span className="sr-only">Decrease</span>
            </Button>
            <span className="font-semibold">{cartItem?.quantity}</span>
            <Button variant="outline" size="icon" className='h-8 w-8 rounded-full'>
                <Plus className="w-4 h-4"/>
                <span className="sr-only">increase</span>
            </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
            ${((cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price)* cartItem?.quantity).toFixed(2)}
        </p>
        <Trash onClick={()=>handleCartItemDelete(cartItem)} className="cursor-pointer mt-1 " size={20}/>

      </div>
    </div>
  );
}

export default UserCartContent;
