import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { UserProvider } from './contexts/user.context';
// import { ProductsProvider } from './contexts/products.context';
// import { CartProvider } from './contexts/cart.context';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserProvider> */}
      {/* <ProductsProvider> */}
        {/* <CartProvider> */}
          <App />
        {/* </CartProvider> */}
      {/* </ProductsProvider> */}
    {/* </UserProvider> */}
  </React.StrictMode>,
)
