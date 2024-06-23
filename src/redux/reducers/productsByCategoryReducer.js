import {
  FETCH_PRODUCT_BY_CATEGORY_REQUEST,
  FETCH_PRODUCT_BY_CATEGORY_SUCCESS,
  FETCH_PRODUCT_BY_CATEGORY_FAILURE
} from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCT_BY_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productByCategoryReducer;
