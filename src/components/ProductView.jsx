import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import { remove } from '../redux/product-modal/productModalSlice'
import { addItem } from '../redux/shopping-cart/cartItemsSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithComas'

import { FaMinus, FaPlus } from 'react-icons/fa'

const ProductView = (props) => {

   let product = props.product

   if (product === undefined) product = {
      title: "",
      price: 0,
      images: []
   }

   const [prevImg, setPrevImg] = useState(product.images[0])

   const [descriptionExpand, setDescriptionExpand] = useState(false)

   const [quantity, setQuantity] = useState(1)

   const updateQuantity = (opt) => {
      if (opt === '+') {
         setQuantity(quantity + 1)
      } else {
         setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
      }
   }

   useEffect(() => {
      setPrevImg(product.images[0])
      setQuantity(1)
   }, [product])

   const dispatch = useDispatch()

   const addToCart = () => {
      dispatch(addItem({
         slug: product.slug,
         price: product.price,
         quantity: quantity
      }))
      alert(`${quantity} Sản phẩm được thêm vào giỏ`)
   }

   const history = useNavigate()

   const goToCart = () => {
      dispatch(addItem({
         slug: product.slug,
         price: product.price,
         quantity: quantity
      }))
      dispatch(remove())
      history("/cart")
   }

   return (
      <div className="product">
         <div className="product__images">
            <div className="product__images__main">
               <img src={prevImg} alt="" />
            </div>
            <div className="product__images__list">
               {
                  product.images.map((item, index) => (
                     <div className="product__images__list__item" key={index} onClick={() => setPrevImg(item)}>
                        <img src={item} alt="" />
                     </div>
                  ))
               }
            </div>
            <div className={`product__description mobile ${descriptionExpand ? 'expand' : ''}`}>
               <div className="product__description__title">
                  Chi tiết sản phẩm
               </div>
               <div className="product__description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
               <div className="product__description__toggle">
                  <Button
                     size="sm"
                     backgroundColor="main"
                     onClick={() => setDescriptionExpand(!descriptionExpand)}
                  >
                     {
                        descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                     }
                  </Button>
               </div>
            </div>
         </div>
         <div className="product__info">
            <h1 className="product__info__title">{product.title}</h1>
            <div className="product__info__item">
               <span className="product__info__item__price">
                  {numberWithCommas(product.price)}
               </span>
               <div className="product__info__item__quantity">
                  <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')} >
                     <FaMinus />
                  </div>
                  <div className="product__info__item__quantity__input">
                     {quantity}
                  </div>
                  <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')} >
                     <FaPlus />
                  </div>
               </div>
            </div>
            <div className="product__info__item">
               <Button backgroundColor="main" onClick={() => addToCart()}>Thêm vào giỏ</Button>
               <Button backgroundColor="main" onClick={() => goToCart()}>Mua ngay</Button>
            </div>
         </div>
      </div>
   )
}

ProductView.propTypes = {
   product: PropTypes.object
}

export default ProductView
