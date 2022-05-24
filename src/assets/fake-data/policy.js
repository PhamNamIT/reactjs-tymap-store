import { FaShoppingCart, FaCreditCard, FaRegGem, FaDonate } from 'react-icons/fa'

import ReturnPolicy from '../../components/ReturnPolicy'

const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng lớn hơn 50k",
    icon: <FaShoppingCart/>,
    path: "free-ship"
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: <FaCreditCard />,
    path: "check-out-cod"
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    icon: <FaRegGem />,
    path: "client-vip"
  },
  {
    name: "Hổ trợ bảo hành",
    description: "Đổi, trả, bảo hành tại tất cả các store",
    icon: <FaDonate />,
    path: "return-policy",
    page: <ReturnPolicy/>
  }
]

export default policy