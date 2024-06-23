import { gql } from '@apollo/client';
import client from '../../graphql/gql-client'; // define your Apollo client configuration

export const FETCH_CATEGORY_BY_NAME_REQUEST = 'FETCH_CATEGORY_BY_NAME_REQUEST';
export const FETCH_CATEGORY_BY_NAME_SUCCESS = 'FETCH_CATEGORY_BY_NAME_SUCCESS';
export const FETCH_CATEGORY_BY_NAME_FAILURE = 'FETCH_CATEGORY_BY_NAME_FAILURE';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const getCategoryByNameRequest = () => ({
  type: FETCH_CATEGORY_BY_NAME_REQUEST,
});

const getCategoryByNameSuccess = (category) => ({
  type: FETCH_CATEGORY_BY_NAME_SUCCESS,
  payload: category,
});

const getCategoryByNameFailure = (error) => ({
  type: FETCH_CATEGORY_BY_NAME_FAILURE,
  payload: error,
});
const getCategoriesRequest = () => ({
  type: FETCH_CATEGORY_BY_NAME_REQUEST,
});

const getCategoriesSuccess = (category) => ({
  type: FETCH_CATEGORY_BY_NAME_SUCCESS,
  payload: category,
});

const getCategoriesFailure = (error) => ({
  type: FETCH_CATEGORY_BY_NAME_FAILURE,
  payload: error,
});

export const fetchCategoryByName = (name) => {
  return async (dispatch) => {
    dispatch(getCategoryByNameRequest());

    try {
      const result = await client.query({
        query: gql`
          query Categories($name: String!) {
            categories(name: $name) {
              name
            }
          }
        `,
        variables: { name },
      });

      dispatch(getCategoryByNameSuccess(result.data.categoryByName));
    } catch (error) {
      dispatch(getCategoryByNameFailure(error.message));
    }
  };
};
export const fetchCategories = () =>{
  return async (dispatch) => {
    dispatch(getCategoriesRequest());

    try {
      const result = await client.query({
        query: gql`
          query Categories {
            categories {
                name
            }
          }
        `
      });

      dispatch(getCategoriesSuccess(result.data.categories));
    } catch (error) {
      dispatch(getCategoriesFailure(error.message));
    }
  };
}
