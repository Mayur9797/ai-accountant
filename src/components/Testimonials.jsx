import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "AI Accountant helped me track my income and expenses easily.
            It is simple and very useful."
          </p>
          <h4>- Rahul Sharma</h4>
        </div>

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "The AI suggestions are amazing. I can now manage my finances
            without any confusion."
          </p>
          <h4>- Priya Patel</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;