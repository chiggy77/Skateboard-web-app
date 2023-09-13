import {  applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { productReducer, selectedProductReducer } from './reducer';
import cartReducer from './Cartreducer';

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  carts: cartReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
