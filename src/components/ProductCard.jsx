import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithComas'

import { FaShoppingBasket } from 'react-icons/fa'

const ProductCard = (props) => {

   const dispatch = useDispatch()

   return (
      <div className="product-card">
         <Link to={`/catalog/${props.slug}`}>
            <div className="product-card__image">
               <img src={props.img[0]} alt="" />
               <img src={props.img[1]} alt="" />
            </div>
            <h3 className="product-card__title">{props.title}</h3>
            <div className="product-card__price">
               {numberWithCommas(props.price)}
               <span className="product-card__price__old">
                  <del>{numberWithCommas(Number(props.price) * 1.2)}</del>
               </span>
            </div>
         </Link>
         <div className="product-card__btn">
            <Button
               size="sm"
               backgroundColor="main"
               icon={<FaShoppingBasket />}
               animate={true}
               onClick={() => dispatch(set(props.slug))}
            >
               Mua
            </Button>
         </div>
      </div>
   )
}

ProductCard.propTypes = {
   img: PropTypes.array,
   title: PropTypes.string,
   price: PropTypes.number,
   slug: PropTypes.string
}

export default ProductCard
