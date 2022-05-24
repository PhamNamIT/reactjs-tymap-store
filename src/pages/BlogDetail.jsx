import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody } from '../components/Section'
import BlogView from '../components/BlogView'
import Grid from '../components/Grid'
import PolicyCard from '../components/PolicyCard'

import blogData from '../assets/fake-data/blog'
import policy from '../assets/fake-data/policy'

const BlogDetal = () => {

   const {slug} = useParams()

   const blog = blogData.getBlogBySlug(slug)

   return (
      <Helmet title={blog.title}>
         <Section>
            <SectionBody>
               <BlogView blog={blog} />
            </SectionBody>
         </Section>
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
                        <Link to={`/policy/${item.path}`} key={index} >
                           <PolicyCard 
                              name={item.name}
                              icon={item.icon}
                              description={item.description}
                           />
                        </Link>
                     ))
                  }
               </Grid>
            </SectionBody>
         </Section>
      </Helmet>
   )
}

export default BlogDetal
