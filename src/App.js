import "./App.css";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="hero">
        <p>👋 Hello, I'm </p>
        <h1>Sarah Gwynn</h1>
        <h2 className="mb-5">Front-end developer based in the United States</h2>
        <div>
          <a
            href="./contact.html"
            className="btn btn-branding"
            title="Contact me"
          >
            Contact me
          </a>
        </div>
      </div>
      <p className="text-center m-5">
        Check out some of my feature project below
      </p>
      <Projects />
    </div>
  );
}

export default App;
