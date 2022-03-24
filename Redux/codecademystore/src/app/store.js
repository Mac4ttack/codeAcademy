import { createStore, combineReducers} from 'redux';

// Import the slice reducers here.
import {cartReducer} from '../features/cart/cartSlice'
import {inventoryReducer} from '../features/inventory/inventorySlice'
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice'

// Create and export the store here.
export const store = createStore(combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer
}));