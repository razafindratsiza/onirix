import React from 'react'
import PropTypes from 'prop-types'
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat,ApolloProvider, split } from '@apollo/client';
const ENV =import.meta.env;

// Initialize Apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ENV.VITE_REACT_API_URL,
});
// Define Apollo component
const Apollo = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

Apollo.propTypes = {
  children: PropTypes.object.isRequired
}

export default Apollo