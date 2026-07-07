import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>AI Accountant</h1>

        <h2>Manage Your Finance with AI</h2>

        <p>
          Track your income, expenses and financial reports in one place.
        </p>

        <button className="hero-btn">Get Started</button>
      </div>

      <Features />
      <About />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;