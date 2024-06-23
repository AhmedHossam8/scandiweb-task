import { gql } from '@apollo/client';
import client from '../../graphql/gql-client'; // ensure you have a configured Apollo Client

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';

export const FETCH_PRODUCT_BY_CATEGORY_REQUEST = 'FETCH_PRODUCT_BY_CATEGORY_REQUEST';
export const FETCH_PRODUCT_BY_CATEGORY_SUCCESS = 'FETCH_PRODUCT_BY_CATEGORY_SUCCESS';
export const FETCH_PRODUCT_BY_CATEGORY_FAILURE = 'FETCH_PRODUCT_BY_CATEGORY_FAILURE';



const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});
const fetchProductByIdRequest = () => ({
    type: FETCH_PRODUCT_BY_ID_REQUEST,
});

const fetchProductByIdSuccess = (product) => ({
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product,
});

const fetchProductByIdFailure = (error) => ({
    type: FETCH_PRODUCT_BY_ID_FAILURE,
    payload: error,
});
const fetchProductByCategoryRequest = () => ({
    type: FETCH_PRODUCT_BY_CATEGORY_REQUEST,
});

const fetchProductByCategorySuccess = (product) => ({
    type: FETCH_PRODUCT_BY_CATEGORY_SUCCESS,
    payload: product,
});

const fetchProductByCategoryFailure = (error) => ({
    type: FETCH_PRODUCT_BY_CATEGORY_FAILURE,
    payload: error,
});
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());

        try {

            const result = await client.query({
                query: gql`
                   query Category {
                        products {
                            id
                            name
                            description
                            inStock
                            prices
                            gallery
                            category
                            attributes
                            brand
                        }
                    }

                `,
            });

            dispatch(fetchProductsSuccess(result.data.products));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };
};
export const fetchProductById = (productId) => {
    return async (dispatch) => {
        dispatch(fetchProductByIdRequest()); // Start request for specific product
        try {
          const result = await client.query({
            query: gql`
              query Product($id: String!) {
                product(id: $id)  {
                  id
                  name
                  description
                  inStock
                  gallery
                  prices
                  category
                  attributes
                  brand
                }
              }
            `,
            variables: {
                id: productId
            }
          });
    
          dispatch(fetchProductByIdSuccess(result.data.product)); // Dispatch success action with fetched product
        } catch (error) {
          dispatch(fetchProductByIdFailure(error.message)); // Dispatch failure action with error message
        }
      };
};
export const fetchProductByCategory = (category) => {
    return async (dispatch) => {
        dispatch(fetchProductByCategoryRequest()); // Start request for specific product
        try {
          const result = await client.query({
            query: gql`
              query Categories($category: String!) {
                productsByCategory(category: $category)  {
                  id
                  name
                  description
                  inStock
                  gallery
                  prices
                  category
                  attributes
                  brand
                }
              }
            `,
            variables: {
                category: category
            }
          });
    
          dispatch(fetchProductByCategorySuccess(result.data.productsByCategory)); // Dispatch success action with fetched product
        } catch (error) {
          dispatch(fetchProductByCategoryFailure(error.message)); // Dispatch failure action with error message
        }
      };
};