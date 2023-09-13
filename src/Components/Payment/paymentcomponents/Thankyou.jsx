import React from 'react'
import { useNavigate } from 'react-router'
const Thankyou = () => {

    const navigate=useNavigate()
    setTimeout(()=>{

    navigate("/")
    },4000)
  return (
      <>
    <div style={{display:"flex", justifyContent:"center"}}>
    
        <img style={{width:"50%"}} src='https://static1.squarespace.com/static/57a7d5881b631b6aa47e1579/58c1457f197aea86abda0c06/58c1458d59cc6886829804df/1489061263798/THANKYOU.gif'/>
    </div>
    
    </>
  )
}

export default Thankyou