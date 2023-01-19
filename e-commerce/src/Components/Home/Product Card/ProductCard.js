import "./ProductCard.css";

function ProductCard (values){
  const key=values.item.id+"svg";

  let stars=[];
for(let i=0; i<Number(values.item.rating.rate);i++){
  stars [i]=1;
}


    return(
        <div className="card">
          <p className="card-title">{values.item.id}</p>
            <h5 className="card-title">{values.item.title}</h5>
            
  <img src= {values.item.image}  alt="..."></img>
 <hr/>
  <div className="card-body">
    <p className="card-title">{values.item.category}</p>
   
    <p className="card-title">${values.item.price}</p >
   
    <p className="stars">
    {stars.map((x,i )=>(<svg key={key+i} className="svg bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>))}{""}
&nbsp; &nbsp;
<span>{values.item.rating.count}</span>
</p>
<h5 className="card-title">{values.item.rating.rate}</h5>
<p className="card-title">{values.item.description}</p >
   
    <a href="#" className="btn btn-success flex-box"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> &nbsp;&nbsp;Add To Cart</a>
  </div>
</div>


    );
}
export default ProductCard;