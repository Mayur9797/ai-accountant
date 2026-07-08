import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <p>Have questions? We'd love to hear from you.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;