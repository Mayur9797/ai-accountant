import "../styles/Home.css";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <div className="hero">
        <h1>AI Accountant</h1>

        <h2>Manage Your Finance with AI</h2>

        <p>
          Track your income, expenses and financial reports in one place.
        </p>

        <button>Get Started</button>
      </div>

      <Features />
    </>
  );
}

export default Home;