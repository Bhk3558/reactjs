import { useState } from "react";
import CartItems from "../Components/Home/Cart/CartItems/CartItems";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

function CartPage (){

 const [cartList , setCartItems] = useState([]);
 fetch("Cart.json")
 .then((res)=>res.json)
 .then((res)=>{
    setCartItems(res);
  
 });



    return (
        <div>
            <div> 
                 <Header />
                    <h1>This is Cart Page</h1>
                <CartItems />
            </div>


            <div>
                <Footer />
            </div>

         </div>
          );
};

export default CartPage;