import { useEffect, useState } from "react";
import ProductCard from "../Components/Home/Product Card/ProductCard";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

function Home () {
const [Products, setProducts] = useState([]); 
const [Click, setClick]= useState(0);
const [Click2, setClick2 ]= useState(100);
    let data ="My Data";
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
    // calling json function
    .then(res => res.json())
    //listening json function to return
    .then((res)=>{
     setProducts(res)
      
    },) 
    },[Click]);
    
    return(
        <div>
         <Header />
        {/* product.json */}
        <div>
            {/* <h1>{Click}</h1>
            <button onClick={()=>{
                setClick(Click+1)
                }}>Click</button>
                
            <h1>{Click2}</h1>
            <button onClick={()=>{
                setClick2(Click+1)
                }}>Click</button>
            <h3>{Products.length}</h3>
            <h2>{data}</h2> */}
    <div className="row"> {
            Products.map((Products , i)=>(
            <div key={Products.id} className="col-3">
                <ProductCard item={Products} index={i} /></div>
                ))} 
                </div>


            {/* {
            Products.map((Products)=>(<ProductCard />))
            }
            <ProductCard /> */}
        </div>
        <Footer />
        </div>
        );
}
export default Home;