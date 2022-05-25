import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import PolicyCard from '../components/PolicyCard'

import policyData from '../assets/fake-data/policy'

const PolicyDetail = () => {

   const {slug} = useParams()

   const policy = policyData.getPolicyBySlug(slug)

   const allPolicy = policyData.getAllPolicy()

   if (allPolicy === undefined) allPolicy = {
      name: "",
      icon: "",
      description: "",
      slug: "/"
   }

   return (
      <Helmet title={policy.title}>
         <div className="policy">
            {policy.page}
         </div>
         <Section>
            <SectionBody>
               <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
               >
                  {
                     allPolicy.map((item, index) => (
                        <Link to={`/policy/${item.slug}`} key={index}>
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

export default PolicyDetail