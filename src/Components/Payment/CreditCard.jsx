import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

import { Card } from "./paymentcomponents/Card";
import { Form } from "./paymentcomponents/Form";
const CreditCard = () => {
  const [curData, setCurData] = React.useState({});
  const getCardData = (data) => {
    setCurData({ ...data });
  };

  const navigate=useNavigate()
  let res;
  const handlepaysuccess=()=>{
     alert("Payment is being processed")

     setTimeout(()=>{
       alert("Payment successfully accepted")
     },3000)

     setTimeout(()=>{
      navigate("/thankyou")
     },5000)
     
  }

  
 
  return (
    <>
      <div
        style={{
          margin: "4rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "2rem",
        }}
      >
        <Card data={curData} />
        <Form getCardData={getCardData} />
      </div>
      <button onClick={handlepaysuccess}
        style={{
          background: "#0e2a47",
          color: "white",
          width: "30%",
          height: "40px0",
          marginLeft: "32%",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Pay
      </button>
    </>
  );
};

export default CreditCard;
