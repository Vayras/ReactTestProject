import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ApolloProvider } from '@apollo/client/react';
import client from './apollo'; // Import the Apollo Client instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
