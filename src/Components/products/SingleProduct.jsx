import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import {useSelector} from "react-redux"
import Star from './Star'
import axios from "axios"
const SIngleProduct = () => {
    const product=useSelector((state)=> state.product)
    const {title,price,description,category,image,rating,id}=product
    const {rate,count}=rating
    console.log(product)
const btn_style1={
  backgroundColor: "#4CAF50", /* Green */
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  cursor:"pointer"
    }
    const btn_style2={
        backgroundColor: "#009aab", 
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        cursor:"pointer"
          }
          const addToWishList=()=>{
            axios.get(`http://localhost:8080/allProducts/${id}`)
            .then((res)=>{
              
              axios.post(`http://localhost:8080/wishList/`,res.data).
              then((resp)=>{
                console.log(resp.data)
                alert("Product successfully added to the wishlist!")
              })
            }).catch((err)=>{
              console.log(err)
            })
          }
          const addToBag=()=>{

            //alert(id)
              axios.get(`http://localhost:8080/allProducts/${id}`)
              .then((res)=>{
                axios.post(`http://localhost:8080/cart`,res.data).
                then((resp)=>{
                  console.log(resp.data)
                  alert("Product successfully added to the cart!")
                })
              }).catch((err)=>{
                console.log(err)
              })
          }
  return (
    <Box w={"100%"} h={"100vh"}>
      <Grid templateColumns="1fr 1fr" w={"70%"} m={"60px auto"} alignItems={'center'} justifyContent={'center'} >
        <GridItem  w={"80%"} m={"auto"} border={"1px solid lightgrey"} borderRadius={"15px"}>
            <Image src={image} w={"60%"} m={"20px 0"}></Image>
        </GridItem>
        <GridItem w={"100%"} >
            <h2>{title}</h2>
            <Star stars={rate} reviews={count}/>
            <p style={{color:"red",fontSize:"18px"}}>M.R.P. Rs. <del>{price+2300}</del> </p>
             <p style={{color:"blue",fontSize:"18px"}}>Deal of the week : <span style={{color:"green", fontFamily:"sans-serif", fontSize:"20px"}}>Rs. {price}</span></p>
            <p style={{textAlign:"justify"}}>{description}</p>
             <Box marginTop={"20px"}>
                <Flex gap={"10px"} justify={"center"}>
             <button class="button" style={btn_style1} onClick={addToWishList}>Add to Wishlist</button>
             <button class="button" style={btn_style2} onClick={addToBag}>Add to Bag</button>
             </Flex>
             </Box>
        </GridItem>
        
      </Grid>
      
    </Box>
  )
}

export default SIngleProduct