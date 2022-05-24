import React from "react"
import ReactDOM from "react-dom/client"

import reportWebVitals from './reportWebVitals'

import { store } from './redux/store'
import { Provider } from 'react-redux'

import './sass/index.scss'

import Layout from './components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
   <React.StrictMode>
      <Provider store={store}>
         <Layout />
      </Provider>
   </React.StrictMode>
)

reportWebVitals()