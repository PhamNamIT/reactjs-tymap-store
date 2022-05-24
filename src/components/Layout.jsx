import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import Router from '../routers/Router'

const Layout = () => {
   return (
      <BrowserRouter>
         <div>
            <div className="container">
               <Header />
               <div className="main">
                  <Router />
               </div>
               <Footer />
               <ProductViewModal />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default Layout
