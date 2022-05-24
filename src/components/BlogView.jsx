import React from 'react'
import PropTypes from 'prop-types'

import ConcerningBlog from '../components/ConcerningBlog'

const BlogView = (props) => {

   let blog = props.blog

   if (blog === undefined) blog = {
      title: "",
      images: [],
      sortDesc: "",
      content: ""
   }

   return (
      <div className="blog-view">
         <div className="blog-view__main">
            {blog.content()}
         </div>
         <div className="widget">
            <ConcerningBlog />
         </div>
      </div>
   )
}

BlogView.propTypes = {
   blog: PropTypes.object
}

export default BlogView
