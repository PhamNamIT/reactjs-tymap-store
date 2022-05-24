import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { FaCheck } from 'react-icons/fa'

const CheckBox = (props) => {

   const inputRef = useRef(null)

   const onChange = () => {
      if (props.onChange) {
         props.onChange(inputRef.current)
      }
   }

   return (
      <label className="custom-checkbox">
         <input type="checkbox" ref={inputRef} checked={props.checked} onChange={onChange} />
         <span className="custom-checkbox__checkmark">
            <FaCheck />
         </span>
         {props.label}
      </label>
   )
}

CheckBox.propTypes = {
   label: PropTypes.string.isRequired,
   checked: PropTypes.bool
}

export default CheckBox
