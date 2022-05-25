import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Home from '../pages/Home'
import PolicyDetail from '../pages/PolicyDetail'
import Product from '../pages/Product'

const Router = () => {
   return (
      <Routes>
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetail />} />
         <Route path="/catalog" element={<Catalog />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/check-out" element={<CheckOut />} />
         <Route path="/" element={<Home />} />
         <Route path="/policy/:slug" element={<PolicyDetail />} />
         <Route path="/catalog/:slug" element={<Product />} />
      </Routes>
   )
}

export default Router
