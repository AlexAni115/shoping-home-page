{/* // <!-- Importing All Componenets--> */}
import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
{/* // <!-- Creating Json for dynamic process--> */}
function App() {
  let [cart,setCart]= useState(0)
  let data= [
    {
      itemName:"Fancy Product",
      rating:"",
      isRating:false,
      price:"$40.00 - $80.00",
      issaleIcon:false

    },
    {
      itemName:"Special Item",
      isRating:true,
      price:"$20.00",
      issaleIcon:true
      
    },
    {
      itemName:"Sale Item",
      isRating:false,
      price:"$50.00",
      issaleIcon:true
    },
    {
      itemName:"Popular Item",
      isRating:true,
      price:"",
      issaleIcon:false
      
    },
    {
      itemName:"Sale Item",
      isRating:false,
      price:"$50.00",
      issaleIcon:true
      
    },
    {
      itemName:"Fancy Product",
      isRating:true,
      price:"$40.00-$80.00",
      issaleIcon:false
    }, {
      itemName:"Special Item",
      isRating:true,
      price:"$20.00",
      issaleIcon:true
    },
    {
      itemName:"Popular Item",
      isRating:true,
      price:"$40.00-$80.00",
      issaleIcon:false
    }

  ]
  return <>
  <TopBar cart={cart} setCart={setCart}/>
  <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {/* // <!-- Create Maping for get details from JSON--> */}
                 {
                  data.map((e,i)=>{
                  return <Card data={e} cart={cart} setCart={setCart} key={i}/>})
                   
                 }
                
                

                </div>
            </div>
        </section>
        <Footer/>    
  </>
  
}

export default App