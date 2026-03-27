import './Works.css'
import { worksData } from '../../data/worksData'
import Product from '../../components/Product/Product'

export default function Works() {
  return (
    <div className="works">
      <div className="works-header">
        <h1>Works</h1>
      </div>

      <div className="works-grid">
        {worksData.map((work) => (
          <Product key={work.slug} work={work} />
        ))}
      </div>
    </div>
  )
}