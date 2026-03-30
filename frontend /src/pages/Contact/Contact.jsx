import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-overlay" />

      <div className="contact-content">
        <h1>Contact</h1>
        <p>
          For enquiries, commissions, or purchases, please get in touch.
        </p>

        <a
          href="mailto:peterelliott96@gmail.com"
          className="contact-email-button"
        >
          peterelliottart@gmail.com
        </a>

        <p className="contact-number">07385 107807</p>
      </div>
    </div>
  )
}