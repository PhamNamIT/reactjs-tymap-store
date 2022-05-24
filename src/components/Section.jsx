import React from 'react'

const Section = (props) => {
   return (
      <div className="section">
         {props.children}
      </div>
   )
}

export const SectionTitle = props => {
   return (
      <div className="section__title">
         <span>{props.children}</span>
      </div>
   )
}

export const SectionBody = props => {
   return (
      <div className="section__body">
         {props.children}
      </div>
   )
}

export default Section
