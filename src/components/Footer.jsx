import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

const footerCustomerLinks = [
   {
      display: "Chính sách đổi trả",
      path: "/policy/return-policy"
   },
   {
      display: "Chính sách bảo hành",
      path: "/policy/refund-policy"
   },
   {
      display: "Chính sách hoàn tiền",
      path: "/policy/chinh-sach-hoan-tien"
   }
]

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <Grid
               col={3}
               mdCol={2}
               smCol={1}
               gap={10}
            >
               <div>
                  <div className="footer__title">
                     Hổ trợ
                  </div>
                  <div className="footer__content">
                     <p>Liên hệ đặt hàng <strong>0384 481 570</strong></p>
                     <p>Thắc mắc đơn hàng <strong>0384 481 570</strong></p>
                     <p>Góp ý, khiếu nại <strong>0384 481 570</strong></p>
                  </div>
               </div>
               <div>
                  <div className="footer__title">
                     Chăm sóc khách hàng
                  </div>
                  <div className="footer__content">
                     {
                        footerCustomerLinks.map((item, index) => (
                           <p key={index} >
                              <Link to={item.path}>
                                 {item.display}
                              </Link>
                           </p>
                        ))
                     }
                  </div>
               </div>
               <div>
                  <div className="footer__title">
                     <p>Về chúng tôi</p>
                     <p>
                        <Link to="/">
                           <img className="footer__logo" src="" alt="" />
                        </Link>
                     </p>
                  </div>
                  <div className="footer__content">
                     <p>
                        Hướng đến mục tiêu mang lại những thiết bị công nghệ cho hàng triệu người tiêu dùng Việt Nam. Hãy cùng React Store hướng đến một cuộc sống năng động, tích cực hơn.
                     </p>
                  </div>
               </div>
            </Grid>
         </div>
      </div>
   )
}

export default Footer
