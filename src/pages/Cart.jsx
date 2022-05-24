import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import productData from '../assets/fake-data/product'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

import numberWithCommas from '../utils/numberWithComas'

const Cart = () => {

   const cartItems = useSelector((state) => (state.cartItems.value)) 

   const [cartProducts, setCartProducts] = useState([])

   const [totalProducts, setTotalProducts] = useState(0)

   const [totalPrice, setTotalPrice] = useState(0)

   useEffect(() => {
      setCartProducts(productData.getCartItemsDetal(cartItems))
      setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
      setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
   }, [cartItems])

   return (
      <Helmet title="Giỏ hàng">
         <div className="cart">
            <div className="cart__info">
               <div className="cart__info__txt">
                  <p>Bạn đang có <span>{totalProducts}</span> sản phẩm trong giỏ hàng.</p>
                  <div className="cart__info__txt__price">
                     <span>Thành tiền</span>
                     <span>{numberWithCommas(totalPrice)}</span>
                  </div>
               </div>
               <div className="cart__info__btn">
                  <Link to="/check-out">
                     <Button size="block" backgroundColor='main'>Đặt hàng</Button>
                  </Link>
                  <Link to="/catalog">
                     <Button size="block" backgroundColor='main'>Tiếp tục mua hàng</Button>
                  </Link>
               </div>
            </div>
            <div className="cart__list">
               {
                  cartProducts.map((item, index) => (
                     <CartItem item={item} key={index} />
                  ))
               }
            </div>
         </div>
      </Helmet>
   )
}

export default Cart
