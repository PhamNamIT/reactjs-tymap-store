import { FaShoppingCart, FaCreditCard, FaRegGem, FaDonate } from 'react-icons/fa'
import WarrantyPolicy from '../../components/WarrantyPolicy'

const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng lớn hơn 50k",
    icon: <FaShoppingCart/>,
    slug: "free-ship"
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: <FaCreditCard />,
    slug: "check-out-cod"
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    icon: <FaRegGem />,
    slug: "client-vip"
  },
  {
    name: "Hổ trợ bảo hành",
    title: "Chính sách bảo hành",
    description: "Đổi, trả, bảo hành tại tất cả các store",
    icon: <FaDonate />,
    slug: "warranty-policy",
    page: <WarrantyPolicy/>
  }
]

const getAllPolicy = () => policy

const getPolicyBySlug = (slug) => policy.find(e => e.slug === slug)

const policyData = {
  getAllPolicy,
  getPolicyBySlug
}

export default policyData