import {
    FETCH_PRODUCT_BY_ID_REQUEST,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    product: null,
    loading: false,
    error: null,
  };
  
  const productInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          product: action.payload,
        };
      case FETCH_PRODUCT_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productInfoReducer;
  