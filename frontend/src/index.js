import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri: process.env.REACT_APP_GRAPHCMS_ENDPOINT
  uri:'https://api-ap-south-1.hygraph.com/v2/clvxn4xho09fg07uymjmp5d2l/master'
}); 

console.log(client)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
