import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Catalog from './components/Catalog'
import Cart from './components/Cart'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}

export default App
