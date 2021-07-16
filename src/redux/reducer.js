import { combineReducers } from 'redux';
import order from './features/order';
import restaurants from './features/restaurants';
import products from './features/products';
import reviews from './features/reviews';

export default combineReducers({
  order,
  restaurants,
  products,
  reviews,
});
