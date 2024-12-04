import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import { Provider } from 'react-redux'
import store from './Utils/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <Provider  store={store}>
        <App/>
      </Provider>
    </ShopContextProvider>
  </StrictMode>,
)
