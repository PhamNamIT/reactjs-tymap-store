import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import BlogCard from '../components/BlogCard'
import ConcerningBlog from '../components/ConcerningBlog'

import blogData from '../assets/fake-data/blog' 

const Blog = () => {

   const blogList = blogData.getBlogAll()

   const listRef = useRef(null)

   const perLoad = 6

   const [data, setData] = useState([])

   const [load, setLoad] = useState(true)

   const [index, setIndex] = useState(0)

   useEffect(() => {
      setData(blogList.slice(0, perLoad))
      setIndex(1)
   }, [blogList])

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (listRef && listRef.current) {
            if (window.screenY + innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
               setLoad(true)
            }
         }
      })
   }, [listRef])

   useEffect(() => {
      const getItems = () => {
         const pages = Math.floor(blogList.length / perLoad)
         const maxIndex = blogList.length % perLoad === 0 ? pages : pages + 1
         if (load && index <= maxIndex) {
            const start = perLoad * index
            const end =  perLoad + start
            setData(data.concat(blogList.slice(start, end)))
            setIndex(index + 1)
         }
      }
      getItems()
      setLoad(false)
   }, [load, index, data, blogList])

   return (
      <Helmet title="Bài viết">
         <div className="blog">
            <div className="blog__content">
               <div ref={listRef}>
                  <Grid
                     col={3}
                     mdCol={2}
                     smCol={1}
                     gap={20}
                  >
                     {
                        blogList.map((item, index) => (
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
               </div>
            </div>
            <div className="blog__filter">
               <ConcerningBlog blog={blogList} />
            </div>
         </div>
      </Helmet>
   )
}

export default Blog
