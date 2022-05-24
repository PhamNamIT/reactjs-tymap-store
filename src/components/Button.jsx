import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

   const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : ''
   const size = props.size ? 'btn-' + props.size : ''
   const animate = props.animate ? 'btn-animate' : ''

   return (
      <button
         className={`btn ${bg} ${size} ${animate}`}
         onClick={props.onClick ? () => props.onClick() : null}
      >
         <span className="btn__txt">{props.children}</span>
         {
            props.icon ? (
               <span className="btn__icon">
                  {props.icon}
               </span>
            ) : null
         }
      </button>
   )
}

Button.propTypes = {
   backgroundColor: PropTypes.string.isRequired,
   size: PropTypes.string,
   icon: PropTypes.object,
   animate: PropTypes.bool,
   onClick: PropTypes.func
}

export default Button
