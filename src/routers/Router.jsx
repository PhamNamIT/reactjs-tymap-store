import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Policy from '../pages/Policy'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import CheckOut from '../pages/CheckOut'

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/catalog" element={<Catalog />} />
         <Route path="/catalog/:slug" element={<Product />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/policy/:slug" element={<Policy />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetail />} />
         <Route path="/check-out" element={<CheckOut />} />
      </Routes>
   )
}

export default Router
