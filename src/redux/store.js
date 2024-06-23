import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer';
import productReducer from './reducers/productReducer';
import productInfoReducer from './reducers/productInfoReducer';
import productsListReducer from './slices/selectedCategorySlice'
import productsByCategoryReducer from './reducers/productsByCategoryReducer';
import selectedCategoryReducer from './slices/selectedCategorySlice'
import productsToViewReducer from './slices/productsToViewSlice'
const rootReducer = combineReducers({
  category: categoryReducer,
  products: productReducer,
  product: productInfoReducer,
  productsByCategory: productsByCategoryReducer,
  selectedCategory: selectedCategoryReducer,
  productsToView: productsToViewReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [thunk]
});

export default store;
