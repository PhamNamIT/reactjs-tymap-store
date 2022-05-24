import Product from '../../pages/Product'

/** Product 01 */
const image01 = require("../image/Reel/Stella/Stella-FX-transparent.png")
/** Product 02 */
const image02 = require("../image/Reel/Tranx/Tranx-150-A-transparent.png")
/** Product 03 */
const image03 = require("../image/Reel/BeastMaster/BeastMaster-A-transparent.png")
/** Product 04 */
const image04 = require("../image/Rod/GLF/GLF-Casting-transparent.png")


const products = [
   {
      title: "Máy câu cá Stella FX Xám",
      price: 259000,
      images: [image01, image01, image01],
      categorySlug: "stella",
      colors: ["gris"],
      slug: "Stella-FX",
      description: "Balo laptop Acer Predator Gaming Utility 17 inch có kích thước 57 x 20 x 18cm - Bạn có thể thấy đây là kích thước khá lớn, bởi vì nó được định hướng sử dụng dành cho chiếc laptop khá lớn 17inch. Bên cạnh đó, kích thước này cũng vừa ôm trọn lưng của người dùng, không gây mệt mỏi khi đeo balo."
   },
   {
      title: "Máy câu lure Tranx 150 A Đen",
      price: 320000,
      images: [image02, image02, image02],
      categorySlug: "tranx",
      colors: ["black"],
      slug: "Tranx-150-A",
      description: ""
   },
   {
      title: "Máy câu điện tử BeastMaster A",
      price: 350000,
      images: [image03, image03, image03],
      categorySlug: "beastmaster",
      colors: ["god"],
      slug: "BeastMaster-A",
      description: ""
   },
   {
      title: "Cần câu GLF Casting Màu Aqua",
      price: 199000,
      images: [image04, image04, image04],
      categorySlug: "glf",
      colors: ["aqua"],
      slug: "GLF-Casting",
      description: ""
   }
   // 4 Product
]

const getAllProducts = () => products

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsDetal = (cartItems) => {
   let res = []
   if (cartItems.length > 0) {
      cartItems.forEach(e => {
         res.push({
            ...e,
            product: getProductBySlug(e.slug)
         })
      })
   }
   return res
}

const getProducts = (count) => {
   const max = products.length - count
   const min = 0
   const start = Math.floor(Math.random() * (max - min) + min)
   return products.slice(start, start + count)
} 

const productData = {
   getAllProducts,
   getProductBySlug,
   getCartItemsDetal,
   getProducts
}

export default productData