import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export default client;
