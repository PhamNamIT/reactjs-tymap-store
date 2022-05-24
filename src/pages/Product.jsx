import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody } from '../components/Section'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/product'

const Product = () => {

   const {slug} = useParams()

   const product = productData.getProductBySlug(slug)

   return (
      <Helmet title={product.title}>
         <Section>
            <SectionBody>
               <ProductView product={product} />
            </SectionBody>
         </Section>
      </Helmet>
   )
}

export default Product
