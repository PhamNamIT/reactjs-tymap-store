import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'

import productData from '../assets/fake-data/product'

import numberWithCommas from '../utils/numberWithComas'

import { FaMapMarkerAlt, FaPhoneAlt, FaWindowClose } from 'react-icons/fa'

const CheckOut = () => {

   const cartItems = useSelector((state) => (state.cartItems.value))

   const redirect = () => window.location = "/"

   if (cartItems.length === 0) {
      setTimeout(() => redirect(), 500)
   }

   const [cartProducts, setCartProducts] = useState([])

   const [totalProducts, setTotalProducts] = useState(0)

   const [totalPrice, setTotalPrice] = useState(0)

   useEffect(() => {
      setCartProducts(productData.getCartItemsDetal(cartItems))
      setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
      setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
   }, [cartItems])

  

   const shipping = 32700

   const idList = ["address", "phone"]

   const removeTxt = (id) => {
      document.getElementById(id).value = ""
   }

   return (
      <Helmet title="Thanh toán">
         <div className="check-out">
            <div className="check-out__item">
               <div className="check-out__item__info">
                  <div className="check-out__item__info__title">
                     <FaMapMarkerAlt />
                     <span>Địa chỉ nhận hàng</span>
                  </div>
                  <div className="check-out__item__info__content">
                     <input type="text" name="" id={idList[0]} defaultValue="" />
                     <FaWindowClose onClick={() => removeTxt(idList[0])} />
                  </div>
               </div>
               <div className="check-out__item__info">
                  <div className="check-out__item__info__title">
                     <FaPhoneAlt />
                     <span>Số điện thoại liên hệ</span>
                  </div>
                  <div className="check-out__item__info__content">
                     <input type="text" name="" id={idList[1]} defaultValue="" />
                     <FaWindowClose onClick={() => removeTxt(idList[1])} />
                  </div>
               </div>
            </div>
            <div className="check-out__item">
               <div className="check-out__item__product">
                  <div className="check-out__item__product__title">
                     Sản phẩm
                  </div>
                  <div className="check-out__item__product__content cart__list">
                     {
                        cartProducts.map((item, index) => (
                           <CartItem item={item} key={index} />
                        ))
                     }
                  </div>
               </div>
               <div className="check-out__item__total">
                  <div className="check-out__item__total__note">
                     <span>Lời nhắn:</span>
                     <input type="text" name="" id="" />
                  </div>
                  <div className="check-out__item__total__product">
                     <span>Tổng số tiền ({totalProducts} sản phẩm):</span>
                     <span className="price"><sup>đ</sup>{numberWithCommas(totalPrice)}</span>
                  </div>
               </div>
            </div>
            <div className="check-out__item">
               <div className="check-out__item__shipping-method">
                  <div className="check-out__item__shipping-method__title">
                     Phương thức thanh toán
                  </div>
                  <div className="check-out__item__shipping-method__content">
                     <CheckBox 
                        label="Thanh toán khi nhận hàng"
                        checked={true}
                     />
                  </div>
               </div>
               <div className="check-out__item__payment">
                  <div className="check-out__item__payment__total">
                     <div className="check-out__item__payment__total__list">
                        <div className="check-out__item__payment__total__item">
                           <span className="check-out__item__payment__total__item__title">
                              Tổng tiền hàng
                           </span>
                           <span className="check-out__item__payment__total__item__value">
                              <sup>đ</sup>{numberWithCommas(totalPrice)}
                           </span>
                        </div>
                        <div className="check-out__item__payment__total__item">
                           <span className="check-out__item__payment__total__item__title">
                              Phí vận chuyển
                           </span>
                           <span className="check-out__item__payment__total__item__value">
                              <sup>đ</sup>{numberWithCommas(shipping)}
                           </span>
                        </div>
                        <div className="check-out__item__payment__total__item">
                           <span className="check-out__item__payment__total__item__title check-out__total">
                              Tổng thanh toán
                           </span>
                           <span className="check-out__item__payment__total__item__value check-out__total">
                              <sup>đ</sup>{numberWithCommas(totalPrice + shipping)}
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="check-out__item__payment__confirm">
                     <span>
                        Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                        <Link to="/policy"> Điều khoản Tí Mập</Link>
                     </span>
                     <Button
                        size="sm"
                        backgroundColor="main"
                     >
                        Đặt hàng
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </Helmet>
   )
}

export default CheckOut