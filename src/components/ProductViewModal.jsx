import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/product-modal/productModalSlice'

import ProductView from './ProductView'
import Button from './Button'

import productData from '../assets/fake-data/product'

const ProductViewModal = () => {

   const [product, setProduct] = useState(undefined)

   const productSlug = useSelector((state) => state.productModal.value)

   const dispatch = useDispatch()

   useEffect(() => {
      setProduct(productData.getProductBySlug(productSlug))
   }, [productSlug])

   return (
      <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
         <div className="product-view__modal__content">
            <ProductView product={product}/>
            <div className="product-view__modal__content__close">
               <Button
                  size="sm"
                  backgroundColor="main"
                  onClick={() => dispatch(remove())}
               >
                  X
               </Button>
            </div>
         </div>
      </div>
   )
}

export default ProductViewModal
