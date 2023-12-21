// <!-- Using Hook Method-->
import React,{useState} from 'react'

function Card({data,cart,setCart}) {
 let [toggle,setToggle] = useState(true)
  return<div className="col mb-5">
    
  <div className="card h-100">
  {/* // <!-- Using conditional rendering for sale badge--> */}
   <div  className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.itemName==="Special Item"||data.itemName==="Sale Item"?<>Sale</>:""}</div>
     <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
     <div className="card-body p-4">
          <div className="text-center">
            {/* // <!-- Using conditional rendering for itemName--> */}
             <h5 className="fw-bolder">{data.itemName}</h5>
             <div className="d-flex justify-content-center small text-warning mb-2">
              {/* // <!-- Using conditional rendering for review rating--> */}
                                        <div className={data.isRating?"bi-star-fill":""}></div>
                                        <div className={data.isRating?"bi-star-fill":""}></div>
                                        <div className={data.isRating?"bi-star-fill":""}></div>
                                        <div className={data.isRating?"bi-star-fill":""}></div>
                                        <div className={data.isRating?"bi-star-fill":""}></div>
                                    </div>
                                    {/* // <!-- Using conditional rendering for Pricing--> */}
            <span className={data.itemName==="Special Item"|| data.itemName==="Sale Item"?"text-muted text-decoration-line-through":""}>{data.itemName==="Popular Item"?<>$40.00</>:data.price}</span>{data.itemName==="Special Item"?<> $18.00</>:data.itemName==="Sale Item"?<>$25</>:""}
              
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        {/* // <!-- Using toggle function for Add to Cart and remove Cart--> */}
          <div className="text-center">{
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
              }}>Add to cart
            </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
              }}>Remove from cart
            </button>
            }</div>
            
      </div>
  </div>
</div>
}

export default Card