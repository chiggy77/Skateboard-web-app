import { Box, Button, Divider, Flex, Input, Spacer, Text,Link } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { fetchCart } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Components/Cart";
import '../Components/Cart.css';
import {  useNavigate } from "react-router-dom";
const HomePage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const totalPrice = useSelector((state) => state.carts.totalPrice);
  const totalItems = useSelector((state) => state.carts.totalItems);
 const navigate=useNavigate();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Box w={'70%'} m={'auto'} display={['none','none','flex']}>
      <Box w={'60%'} overflow={'auto'} h={'80vh'}>
        {cart.map((el) => (
          <Cart key={el.id} id={el.id} el={el} />
        ))}
      </Box>
      <Box m={20} p={10} w={'40%'} h={'32vh'}bg={'#efefef'}>
        <Flex  p={10} fontSize={30} fontWeight={700}>
          <Box>Total Price:</Box>
          <Spacer />
          <Box >Rs. {totalPrice}</Box>
        </Flex>
        <Flex  p={10}>
          <Box>Total Items: </Box>
          ( <Box >{totalItems}</Box> )
        </Flex>
        
        <Box m={20}>
          <hr/>
         <Button mt={10}w={'100%'}bg={'#e4fc01'}border={'none'}outline={'1px solid black'}fontSize={25}  onClick={() => navigate('/checkout')}>Checkout</Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default HomePage;
