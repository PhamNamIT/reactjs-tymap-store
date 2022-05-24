import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody } from '../components/Section'
import ReturnPolicy from '../components/ReturnPolicy'
import Grid from '../components/Grid'
import PolicyCard from '../components/PolicyCard'

import policy from '../assets/fake-data/policy'

const Policy = () => {

   const 

   return (
      <Helmet title="Chính sách đổi trả">
         <Section>
            <SectionBody>

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
                        <Link to="/policy" key={index}>
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
      </Helmet>
   )
}

export default Policy
