import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import PolicyCard from '../components/PolicyCard'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policyData from '../assets/fake-data/policy'
import productData from '../assets/fake-data/product'
import blogData from '../assets/fake-data/blog'

const Home = () => {

   const policy = policyData.getAllPolicy()

   if (policy === undefined) policy = {
      name: "",
      icon: "",
      description: "",
      slug: "/"
   }

   return (
      <Helmet title="Trang chủ">
         {/** Hero Slider */}
         <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={6000} />
         {/** End Hero Slider */}
         {/** Section Policy */}
         <Section>
            <SectionBody>
               <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
               >
                  {
                     policy.map((item, index) => (
                        <Link to={`policy/${item.slug}`} key={index}>
                           <PolicyCard
                              name={item.name}
                              description={item.description}
                              icon={item.icon}
                           />
                        </Link>
                     ))
                  }
               </Grid>
            </SectionBody>
         </Section>
         {/** End Section Policy */}
         {/** Section Featured Fishing Gear */}
         <Section>
            <SectionTitle>
               Sản phẩm nổi bật
            </SectionTitle>
            <SectionBody>
               <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
               >
                  {
                     productData.getProducts(4).map((item, index) => (
                        <ProductCard
                           key={index}
                           img={item.images}
                           title={item.title}
                           price={item.price}
                           slug={item.slug}
                        />
                     ))
                  }
               </Grid>
            </SectionBody>
         </Section>
         {/** End Section Featured Fishing Gear */}
         {/** Section Tips, Tricks and Inspiration */}
         <Section>
            <SectionTitle>
               Mẹo, thủ thuật và sáng tạo
            </SectionTitle>
            <SectionBody>
               <Grid
                  col={3}
                  mdCol={2}
                  smCol={1}
                  gap={40}
               >
                  {
                     blogData.getBlogs(2).map((item, index) => (
                        <BlogCard 
                           key={index}
                           title={item.title}
                           image={item.image}
                           slug={item.slug}
                           sortDesc={item.sortDesc}
                        />
                     ))
                  }
               </Grid>
            </SectionBody>
         </Section>
         {/** End Section Tips, Tricks and Inspiration */}
      </Helmet>
   )
}

export default Home
