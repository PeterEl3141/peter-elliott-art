import { Link } from 'react-router-dom'
import './Product.css'

export default function Product({ work }) {
  return (
    <Link to={`/works/${work.slug}`} className="product">
      <div className="product-image-wrapper">
        <img src={work.image} alt={work.title} className="product-image" />
      </div>

      <div className="product-info">
        <h2 className="product-title">{work.title}</h2>
        <p className="product-price">{work.price}</p>
      </div>
    </Link>
  )
}