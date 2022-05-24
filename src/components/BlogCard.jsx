import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogCard = (props) => {
   return (
      <div className="blog-card">
         <Link to={`/blog/${props.slug}`}>
            <div className="blog-card__image">
               <img src={props.image[0]} alt="" />
            </div>
            <h3 className="blog-card__title">{props.title}</h3>
            <div className="blog-card__description-sort">
               {props.sortDesc}
            </div>
         </Link>
      </div>
   )
}

BlogCard.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.array,
   slug: PropTypes.string,
   sortDesc: PropTypes.string
}

export default BlogCard
