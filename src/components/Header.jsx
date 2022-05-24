import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaBars, FaWindowClose, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'

const mainNav = [
   {
      display: "Trang chủ",
      path: "/"
   },
   {
      display: "Sản phẩm",
      path: "/catalog"
   },
   {
      display: "Bài viết",
      path: "/blog"
   }
]

const Header = () => {

   const {pathname} = useLocation()

   const activeNav = mainNav.findIndex(e => e.path === pathname)

   const headerRef = useRef(null)

   const activeShrink = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         headerRef.current.classList.add('shrink')
      } else {
         headerRef.current.classList.remove('shrink')
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', activeShrink)
      return () => {
         window.addEventListener('scroll', activeShrink)
      }
   }, [])

   const menuLeft = useRef(null)

   const searchBox = useRef(null)

   const menuToggle = () => menuLeft.current.classList.toggle('active')

   const searchToggle = () => searchBox.current.classList.toggle('active')

   return (
      <div className="header" ref={headerRef}>
        <div className="container">
           <div className="header__logo">
               <Link to="/">
                  <img src="" alt="" />
               </Link>
           </div>
           <div className="header__menu">
              <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                  <FaBars />
              </div>
              <div className="header__menu__left" ref={menuLeft}>
                 <div className="header__menu__left__close" onClick={menuToggle}>
                     <FaWindowClose />
                 </div>
                  {
                     mainNav.map((item, index) => (
                        <div
                           key={index}
                           className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                           onClick={menuToggle}
                        >
                           <Link to={item.path}>
                              <span>{item.display}</span>
                           </Link>
                        </div>
                     ))
                  }
              </div>
              <div className="header__menu__right">
                 <div className="header__menu__item header__menu__right__item header__menu__right__search" ref={searchBox}>
                     <FaSearch className="header__menu__right__item__search-icon" onClick={searchToggle}/>
                     <div className="header__menu__right__item__toggle">
                        <FaWindowClose onClick={searchToggle}/>
                        <input type="text"  />
                     </div>
                 </div>
                 <div className="header__menu__item header__menu__right__item">
                     <Link to="/cart">
                        <FaShoppingBag />
                     </Link>
                 </div>
                 <div className="header__menu__item header__menu__right__item">
                     <FaUser />
                 </div>
              </div>
           </div>
        </div>
      </div>
   )
}

export default Header
