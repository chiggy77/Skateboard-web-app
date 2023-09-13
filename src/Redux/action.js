import { GET_CART_FAILURE,GET_CART_REQUEST,GET_CART_SUCCESS,DELETE_CART_FAILURE,DELETE_CART_REQUEST,DELETE_CART_SUCCESS,ADD_CART_FAILURE,ADD_CART_REQUEST,ADD_CART_SUCCESS,UPDATE_CART_FAILURE,UPDATE_CART_REQUEST,UPDATE_CART_SUCCESS} from "./actionTypes";
import { ActionTypes } from './actionTypes'
import axios from 'axios';

//getcart items
export const getCartRequest = (payload) => ({
    type: GET_CART_REQUEST,
    payload,
  });
  export const getCartSuccess = (payload) => ({
    type: GET_CART_SUCCESS,
    payload,
  });
  export const getCartFailure = (payload) => ({
    type: GET_CART_FAILURE,
    payload,
  });


  export const fetchCart = () => (dispatch) => {
    dispatch(getCartRequest());
    axios
      .get(`http://localhost:8080/cart`)
      .then((r) => {
        console.log(r.data);
        dispatch(getCartSuccess(r.data));
      }).catch((err)=>{
          console.log("something went wrong");
          dispatch(getCartFailure());
      });
  };

  //deleteCart

  export const deleteCartSuccess=(payload)=>{
    return{
      type:DELETE_CART_SUCCESS,
      payload:payload
    }
  };
  
  export const deleteCartFailure=()=>{
      return{
          type:DELETE_CART_FAILURE
      }
  };
  export const deleteCartRequest=()=>{
      return{
          type:DELETE_CART_REQUEST
      }
  };
  export const deleteCart = (id) => {
    return (dispatch) => {
      dispatch(deleteCartRequest());
  
      axios
        .delete(`http://localhost:8080/cart/${id}`)
        .then((response) => {
          // Handle success response
          console.log('Cart Item deleted successfully');
          dispatch(deleteCartSuccess(id));
        })
        .catch((error) => {
          // Handle error response
          console.error('Error deleting Cart:', error);
          dispatch(deleteCartFailure());
        });
    };
  };

  //ADDCART

  
export const postCartSuccess=(payload)=>{
    return{
      type: ADD_CART_SUCCESS,
      payload:payload
    }
  };
  
  export const postCartFailure=()=>{
      return{
          type:ADD_CART_FAILURE
      }
  };
  export const postCartRequest=()=>{
      return{
          type:ADD_CART_REQUEST
      }
  };
  export const AddCart=(newCart)=>{
  return(dispatch)=>{
  dispatch(postCartRequest());
  axios
  .post(`http://localhost:8080/cart`,newCart)
  .then((res)=>{
    console.log(res);
    dispatch(postCartSuccess(res.data));
  })
  .catch((err)=>{
  dispatch(postCartFailure());
  })
  };
  };



  //update cart


  export const updateCartSuccess=(payload)=>{
    return{
      type:UPDATE_CART_SUCCESS,
      payload:payload
    }
  };
  
  export const updateCartFailure=()=>{
      return{
          type:UPDATE_CART_FAILURE
      }
  };
  export const updateCartRequest=()=>{
      return{
          type:UPDATE_CART_REQUEST
      }
  };

  export const updateCart = (id, updatedCart) => {
    return (dispatch) => {
      dispatch(updateCartRequest());
  
      axios
        .patch(`http://localhost:8080/cart/${id}`, updatedCart)
        .then((response) => {
          // Handle success response
          console.log('Cart updated successfully');
          dispatch(updateCartSuccess(response.data));
        })
        .catch((error) => {
          // Handle error response
          console.error('Error updating Cart:', error);
          dispatch(updateCartFailure());
        });
    };
  };





  //PRODUCTS
  export const setProducts = (products)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProduct = (product)=>{
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct = ()=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}