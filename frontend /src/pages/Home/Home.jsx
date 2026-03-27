import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="home-bio">
          A Swansea-based artist working primarily in charcoal and paint,
          capturing the landscapes of Wales.
        </p>
        <h1 className="home-title">Peter Elliott</h1>
      </div>

      <img
        src="/images/profile.png"
        alt="Peter Elliott"
        className="home-image"
      />
    </div>
  )
}