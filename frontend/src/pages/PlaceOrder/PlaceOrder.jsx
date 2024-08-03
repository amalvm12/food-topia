import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount , token,food_list,cartItems,url} = useContext(StoreContext)
  const [data, setData] = useState({
    fristName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""

  })

   const onChangeHandle = (event)=>{
    const name =event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))

   }

   const placeOrder= async (event)=>{
    event.preventDefault();
    let orderItems= [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[item._id];
        orderItems.push(itemInfo);
      }

    })
   
    
    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }

    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    
    
    if(response.data.success){
      const {session_url}= response.data;
      window.location.replace(session_url);

    }
    else{
      alert("Error from frontend")
    }

   }
   const navigate = useNavigate()
   useEffect(()=>{
    if(!token){
      navigate('/cart')

    }else if(getTotalCartAmount()===0){
      alert("Please add items in cart")
      navigate('/')
    }

   },[token])

  
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='fristName' value={data.fristName} onChange={onChangeHandle} type="text" placeholder='Frist Name' />
          <input  required name="lastName" value={data.lastName} onChange={onChangeHandle} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandle} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' value={data.street} onChange={onChangeHandle} type="text"  placeholder='Street'/>
        <div className='multi-fields'>
          <input required name='city' onChange={onChangeHandle} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandle} value={data.state} type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input required name='zipcode' onChange={onChangeHandle} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandle} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required  name='phone' onChange={onChangeHandle} value={data.phone} type="text" placeholder='Phone' />
      </div>
     
        {/* right side */}
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Carts Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'  >PROCEED TO PAYMENT</button>
        </div>
      </div>

      
    </form>
  )
}

export default PlaceOrder