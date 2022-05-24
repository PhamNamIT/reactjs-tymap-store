import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import blogData from '../assets/fake-data/blog'

const ConcerningBlog = () => {

   const blog = blogData.getBlogs(6)

   return (
      <div className="concerning-blog">
         <div className="concerning-blog__title">
            Bài viết liên quan
         </div>
         {
            blog.map((item, index) => (
               <div className="concerning-blog__item" key={index} >
                  <Link to={`/blog/${item.slug}`}>
                     <div className="concerning-blog__item__image">
                        <img src={item.image[0]} alt="" />
                     </div>
                     <div className="concerning-blog__item__sortDesc">
                        {item.sortDesc}
                     </div>
                  </Link>
               </div>
            ))
         }
      </div>
   )
}

export default ConcerningBlog
