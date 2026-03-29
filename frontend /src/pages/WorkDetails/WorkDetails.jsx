import { useParams } from 'react-router-dom'
import { worksData } from '../../data/worksData'
import './WorkDetails.css'

export default function WorkDetails() {
  const { slug } = useParams()

  const work = worksData.find((item) => item.slug === slug)

  if (!work) {
    return <div className="work-details">Work not found.</div>
  }

  return (
    <div className="work-details">
      <div className="work-details-image-container">
        <img
          src={work.image}
          alt={work.title}
          className="work-details-image"
        />
      </div>

      <div className="work-details-info">
        <h1 className="work-details-title">{work.title}</h1>
        <p className="work-details-price">{work.price}</p>
        <p className="work-details-description">{work.description}</p>

        {work.sold ? (
          <div className="work-details-sold">SOLD</div>
        ) : (
          <a
            href={`mailto:peterelliottart@gmail.com?subject=Enquiry about ${work.title}`}
            className="work-details-cta"
          >
            Request a Quote
          </a>
        )}
      </div>
    </div>
  )
}