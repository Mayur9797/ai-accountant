import "../styles/Home.css";
import Features from "../components/Features";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>AI Accountant</h1>

          <h2>Smart AI-Powered Financial Management</h2>

          <p>
            Manage your income, expenses, budgets, and financial reports with
            the power of Artificial Intelligence. Track every transaction,
            receive smart financial insights, and make better financial
            decisions with ease.
          </p>

          <div className="hero-buttons">

            <Link to="/signup">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="secondary-btn">
                View Dashboard
              </button>
            </Link>

          </div>

          <div className="hero-features">

            <span>🤖 AI Powered</span>

            <span>🔒 Secure</span>

            <span>⚡ Fast</span>

            <span>📊 Smart Reports</span>

          </div>

        </div>
        

      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <WhyChoose />

      <Testimonials />

      <Footer />

    </>
  );
}

export default Home;