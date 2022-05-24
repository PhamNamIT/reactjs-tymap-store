import React, { useCallback, useEffect, useRef, useState } from 'react'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import InfinityList from '../components/InfinityList'

import { FaWindowClose } from 'react-icons/fa'

import catagory from '../assets/fake-data/catagory'
import productData from '../assets/fake-data/product'

const Catalog = () => {

   const filterRef = useRef(null)

   const showHiddenFilter = () => filterRef.current.classList.toggle('active')

   const initialFilter = {
      catagory: []
   }

   const productList = productData.getAllProducts()

   const [products, setProducts] = useState(productList)

   const [filter, setFilter] = useState(initialFilter)

   const filterSelect = (checked, type, item) => {
      if (checked) {
         switch (type) {
            case "CATEGORY":
               setFilter({...filter, catagory: [...filter.catagory, item.catagorySlug]})
               break
            default:
         }
      } else {
         switch (type) {
            case "CATEGORY":
               const newCategory = filter.catagory.filter(e => e !== item.catagorySlug)
               setFilter({...filter, catagory: newCategory})
               break
            default:
         }
      }
   }

   const updateProducts = useCallback(
      () => {
         let temp = productList

         if (filter.catagory.length > 0) {
            temp = temp.filter(e => filter.catagory.includes(e.categorySlug))
         }

         setProducts(temp)
      }, [filter, productList],
   )

   useEffect(() => {
      updateProducts()
   }, [updateProducts])

   const clearFilter = () => setFilter(initialFilter)

   return (
      <Helmet title="Sản phẩm">
         <div className="catalog">
            <div className="catalog__filter" ref={filterRef}>
               <div className="catalog__filter__close" onClick={() => showHiddenFilter()}>
                  <FaWindowClose />
               </div>
               <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                     Danh mục sản phẩm
                  </div>
                  <div className="catalog__filter__widget__content">
                     {
                        catagory.map((item, index) => (
                           <div className="catalog__filter__widget__content__item" key={index}>
                              <CheckBox
                                 label={item.display}
                                 checked={filter.catagory.includes(item.catagorySlug)}
                                 onChange={(input) => filterSelect(input.checked, "CATEGORY", item)}
                              />
                           </div>
                        ))
                     }
                  </div>
               </div>
               <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__content">
                     <Button size="sm" backgroundColor="main" onClick={() => clearFilter()}>Xóa bộ lọc</Button>
                  </div>
               </div>
               <div className="catalog__filter__toggle">
                  <Button size="sm" backgroundColor="main" onClick={() => showHiddenFilter()}>Bộ lọc</Button>
               </div>
            </div>
            <div className="catalog__content">
               <InfinityList data={products}/>
            </div>
         </div>
      </Helmet>
   )
}

export default Catalog
