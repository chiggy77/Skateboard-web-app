import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, updateCart } from '../Redux/action';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ id, el }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(el.qty);
  const totalPrice = useSelector((state) => state.carts.totalPrice);
  const totalItems = useSelector((state) => state.carts.totalItems);


  const handleDel = () => {
    dispatch(deleteCart(id));
  };

  const handleAdd = () => {
    const newQty = qty + 1;
    updateQuantity(newQty);
  };

  const handleSub = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      updateQuantity(newQty);
    }
  };

  useEffect(() => {
    // Update the local state when the totalPrice or totalItems change in the Redux store
    setQty(el.qty);
  }, [el.qty]);




  const updateQuantity = (newQty) => {
    // Update the quantity in the backend and then update the Redux store
    fetch(`http://localhost:8080/cart/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ qty: newQty }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the cart item in the Redux store
        dispatch(updateCart(data));
        setQty(newQty); // Update the local state
      })
      .catch((error) => {
        console.log('Error updating quantity:', error);
      });
  };

  return (
    <Flex p={10} overflow={'auto'} maxHh={'25vh'} w={'100%'} justify={'space-around'} m={'auto'}>
      <Box w={'30%'}>
        <Image src={el.image} alt={el.title} w={'100%'} />
      </Box>
      <Box w={'50%'} p={10} m={20}>
        <Text fontSize={'25px'} fontWeight={700}>{el.title}</Text>
        <Text fontSize={'15px'} fontWeight={700}>Price: <span color={"grey"}>Rs. {el.price}</span></Text>
        <Text fontSize={'15px'} fontWeight={700}>Quantity: <span>{qty}</span></Text>
        <Box >
          <Button onClick={handleAdd} outline={'1px solid black'} border={'none'}w={'50%'}>+</Button>
          <Button onClick={handleSub} outline={'1px solid black'} border={'none'}w={'50%'}>-</Button>
        </Box>
          <Button onClick={handleDel}outline={'1px solid black'} border={'none'}w={'100%'}>Delete</Button>
      </Box>
    </Flex>
  );
};
export default Cart;