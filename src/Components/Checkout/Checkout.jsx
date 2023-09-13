import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from "./Checkout.module.css"
import { useDispatch } from 'react-redux'
import img1 from '../Photos/Home_page/1.png'

const Checkout = () => {

let totalPrice = useSelector((state) => state.carts.totalPrice);
const totalItems = useSelector((state) => state.totalItems);
    

 

    const navigate=useNavigate()
    const handlebacktocart=()=>{
     navigate("/cart")
    }

    const initValues={ email:"",name:"", last:"", phone:"", pin:"", checkbox:"", select:"", selectstate:"",city:"",address:""}
   const [Input,setInput]=useState(initValues)
   const [Errors,setErrors]=useState({})
   const [isSubmit,setIsSubmit]=useState(false)
   const [coupon,setCoupon]=useState({
       cname:"",
   })

   const handlevalue=(e)=>{
    const {name, value}=e.target;

   setCoupon({
       ...coupon,
       [name]:value
   })

   
   }
   const handleCouponcode=(e)=>{
    if(coupon.cname==="MASAI2023"){
        totalPrice=Math.ceil(+totalPrice/3);
    }
   }
  const handleinput=(e)=>{

    const {name, value}=e.target;

    setInput({
        ...Input, [name]:value
    })
  
  console.log(Input)
    
  }
   

  const handlesubmit=(e)=>{
   e.preventDefault();
  setErrors(  validate(Input))
  setIsSubmit(true)
 }
    

   const validate =(values)=>{
  const errors={}
    if(!values.name){
        errors.name="name is required!";
    }
    if(!values.email){
        errors.email="email is required!";
    }
    if(!values.pin){
        errors.pin="pin is required!";
    }
    if(!values.phone){
        errors.phone="phone number is required!";
    }
    if(!values.select){
        errors.select="country name is required!";
    }
    if(!values.selectstate){
        errors.selectstate="state is required!";
    }
    if(!values.last){
        errors.last=" last name is required!";
    }
    
    if(!values.city){
        errors.city="city field is required!";
    }
    if(!values.address){
        errors.address="address field is required!";
    }
    else {
        navigate("/payment")
    }     
    return errors;
   }
   
   useEffect(()=>{
       console.log(Errors)
  if(Object.keys(Errors).length===0 && isSubmit){
      console.log(Input)
  }
   },[Errors])

  
  return  (
    <div className={styles.checkoutparent}>
     
        <div className={styles.left}>
       <div className={styles.contactinformation}>
     
            <form onSubmit={handlesubmit} >
                <div className={styles.headlogo}>
                    <img className={styles.headlogoimg} src={img1}/>
                </div>
                <div className={styles.upperdiv}>
                    <h4>Contact inforamtion</h4>
                    
                </div>
                <div className={styles.emailbox}>
                    <p style={{color:"red"}}>{Errors.email}</p>
                <input name="email" onChange={handleinput} value={Input.email} type="email" placeholder='Email'></input>
                <div >
                <p style={{color:"red"}}>{Errors.checkbox}</p>
                <input name="checkbox" onChange={handleinput} value={Input.checkbox}  type="checkbox"></input>
                <label>Email me with news and offers</label>
                </div>
                </div>
                <br/>
                <h4>Shiping address</h4>
                
                <div>
                <p style={{color:"red"}}>{Errors.select}</p>
                    <select name="select" onChange={handleinput} value={Input.select} className={styles.selectcountry}>
                        <option>Country</option>
                        <option>
                         India
                        </option>
                    </select>
                </div>
                <div className={styles.personname}>
                 
                    <div>
                    <input name="name" onChange={handleinput} value={Input.name} type="text" placeholder='First name'></input>
                    <p style={{color:"red"}}>{Errors.name}</p>
                    </div>
                    <div>
                    <input name="last" onChange={handleinput} value={Input.last} type="text" placeholder='Last name'></input>
                    <p style={{color:"red"}}>{Errors.last}</p>
                    </div>

                </div>
                <div className={styles.company}>

                    <input type="text"  placeholder="Company(optional)"></input>
                </div>
                <div className={styles.address}>
                
                    <input type="text" onChange={handleinput} name="address" value={Input.address} placeholder="Address"></input>
                    <p style={{color:"red"}}>{Errors.address}</p>
                </div>
                <div className={styles.apartment}>
                    <input type="text"   placeholder='Apartment suite, etc.(optional)'></input>
                </div>
                <div className={styles.citystatepin}>
               <div>
             <input type="text" name="city" onChange={handleinput} value={Input.city} placeholder='City'></input>
                    <p style={{color:"red"}}>{Errors.city}</p>
               </div>
                    
                    
                    <div>
                       <select className={styles.state} name="selectstate" onChange={handleinput} value={Input.selectstate}>
                           <option>State</option>
                       <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
                       </select>
                <p style={{color:"red"}}>{Errors.selectedstate}</p>
                  </div>  
                  <div>
                  <input name="pin" value={Input.pin} onChange={handleinput} type="number" placeholder='PIN code'></input> 
                       <p style={{color:"red"}}>{Errors.pin}</p>
                       </div>    
        
    
  
                    
</div>

<div className={styles.phonenum}>
<p style={{color:"red"}}>{Errors.phone}</p>
    <input name="phone" onChange={handleinput} value={Input.phone} type="number" placeholder='Phone'></input>
    <div>
        <input type="checkbox"></input>
        <label>Save this information for the next time</label>
    </div>
</div>
<div className={styles.allbutton}>
    <button onClick={handlebacktocart} className={styles.returncart} >Return to cart</button>
    <button   onClick={handlesubmit}  className={styles.shippingbtn}>Continue to shipping</button>
</div>
<hr className={styles.uppermarginline}/>


            </form>
            

        </div>
        </div>
        <div className={styles.right}>
        <div className={styles.totaldetail}>
            <div className={styles.cartitembox}>
                
            </div>
            <hr/>
            <div className={styles.couponbox}>
                <input name="cname" onChange={handlevalue} type="text" value={coupon.cname} className={styles.couponinput} placeholder="Discount code"></input>
                <button onClick={handleCouponcode} className={styles.couponapply}>Apply</button>
            </div>
            <hr/>
            <div>
                <div className={styles.subtotal}>
                    <p>Subtotal</p>
                    <h5>Rs.{totalPrice}</h5>
                </div>
                <div className={styles.shippingdet}>
                    <p>Shipping</p>
                    <h5>Calculated at next step</h5>
                </div>
                <hr/>
                <div className={styles.totalbill}>
                    <h3>Total</h3>
                    <h2>Rs.{totalPrice}</h2>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Checkout