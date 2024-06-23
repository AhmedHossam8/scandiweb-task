import {
    FETCH_CATEGORY_BY_NAME_REQUEST,
    FETCH_CATEGORY_BY_NAME_SUCCESS,
    FETCH_CATEGORY_BY_NAME_FAILURE,
  } from '../actions/categoryActions';
  
  const initialState = {
    category: null,
    loading: false,
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORY_BY_NAME_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CATEGORY_BY_NAME_SUCCESS:
        return {
          ...state,
          loading: false,
          category: action.payload,
        };
      case FETCH_CATEGORY_BY_NAME_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  