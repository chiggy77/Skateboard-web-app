import {
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS
} from "./actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
  isLoading: false,
  isError: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case GET_CART_SUCCESS:
      const updatedTotalPriceGet = action.payload.reduce((total, item) => total + item.price * item.qty, 0);
      const updatedTotalItemsGet = action.payload.reduce((total, item) => total + item.qty, 0);
      return {
        ...state,
        cart: action.payload,
        totalPrice: updatedTotalPriceGet,
        totalItems: updatedTotalItemsGet,
        isLoading: false,
        isError: false
      };
    case GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        cart: [],
        totalPrice: 0,
        totalItems: 0,
        isError: true
      };

    case ADD_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case ADD_CART_SUCCESS:
      const updatedTotalPriceAdd = state.totalPrice + action.payload.price * action.payload.qty;
      const updatedTotalItemsAdd = state.totalItems + action.payload.qty;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: updatedTotalPriceAdd,
        totalItems: updatedTotalItemsAdd,
        isLoading: false,
        isError: false
      };

    case UPDATE_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case UPDATE_CART_SUCCESS:
      const updatedTotalPriceUpdate = state.cart.reduce((total, item) => {
        if (item.id === action.payload.id) {
          return total + action.payload.price * action.payload.qty;
        }
        return total + item.price * item.qty;
      }, 0);

      const updatedTotalItemsUpdate = state.cart.reduce((total, item) => {
        if (item.id === action.payload.id) {
          return total + action.payload.qty;
        }
        return total + item.qty;
      }, 0);

      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return action.payload;
          }
          return cartItem;
        }),
        totalPrice: updatedTotalPriceUpdate,
        totalItems: updatedTotalItemsUpdate,
        isLoading: false,
        isError: false
      };

    case DELETE_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case DELETE_CART_SUCCESS:
      const deletedItem = state.cart.find((cartItem) => cartItem.id === action.payload);
      const updatedTotalPriceDel = state.totalPrice - deletedItem.price * deletedItem.qty;
      const updatedTotalItemsDel = state.totalItems - deletedItem.qty;

      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        totalPrice: updatedTotalPriceDel,
        totalItems: updatedTotalItemsDel,
        isLoading: false,
        isError: false
      };

    case DELETE_CART_FAILURE:
    case UPDATE_CART_FAILURE:
    case ADD_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default cartReducer;
