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
    <div className="hero">
      <h1>AI Accountant</h1>

      <h2>Manage Your Finance with AI</h2>

      <p>
        Track your income, expenses and financial reports in one place.
      </p>

      <Link to="/signup">
  <button>Get Started</button>
   </Link>
    </div>

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