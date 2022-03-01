import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col d-none d-lg-block">
          <img
            src="/images/yogurt.png"
            className="img-fluid"
            alt="Yogurt project preview"
          />
        </div>
        <div className="col">
          <div className="project-description">
            <h2 className="mb-5">Yogurt Landing Page</h2>
            <p className="mb5 text-muted">
              I entered the world of front-end development by gaining some
              knowledge in HTML, CSS, and JavaScript. I used my knowledge of
              these languages, along with my new skills in VS Code, to build a
              landing page about Yogurt. The page utilizes JavaScript functions
              to create user interaction.
            </p>
            <a href="/projects.html" className="btn btn-branding-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <div className="project-description">
            <h2 className="mb-5">Weather App</h2>
            <p className="mb-5 text-muted">
              I built a Vanilla JavaScript weather app in SheCodes Plus, an
              advanced 8-week JavaScript coding workshop. Building upon my
              previously-gained knowledge, I also became skilled in Bootstrap,
              API’s, real-life development workflow, hosting, and advanced
              JavaScript. I combined all of these skills to create a
              fully-functioning weather app.
            </p>
            <a href="/projects.html" className="btn btn-branding-outline">
              Learn more
            </a>
          </div>
        </div>
        <div className="col d-none d-lg-block">
          <img
            src="/images/weather.png"
            className="img-fluid"
            alt="Weather project preview"
          />
        </div>
      </div>
      <div className="row">
        <div className="col d-none d-lg-block">
          <img
            src="/images/dictionary.png"
            className="img-fluid"
            alt="Dictionary app preview"
          />
        </div>
        <div className="col">
          <div className="project-description">
            <h2 className="mb-5">Dictionary App</h2>
            <p className="mb-5 text-muted">
              I immersed myself in React development in SheCodes React. I used
              my knowledge of this highly-demanded framework to build a working
              dictionary app incorporating coding best practices, along with the
              most popular tools and technologies.
            </p>
            <a href="/projects.html" className="btn btn-branding-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div className="contact-box d-flex justify-content-between mb-5 d-none d-md-flex">
          <div>
            <h3>Work Inquiry</h3>
            <p className="text-muted">Let's work together</p>
          </div>
          <div>
            <a
              href="/contact.html"
              className="btn btn-branding mt-3"
              title="Contact Sarah"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <a
            href="mailto:sarahann19@gmail.com"
            className="email-link"
            title="Email Sarah"
          >
            sarahann19@gmail.com
          </a>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a
            href="https://www.facebook.com/sarah.gwynn.1"
            target="_blank"
            rel="noreferrer"
            title="Facebook profile"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/SarahGwynn1"
            target="_blank"
            rel="noreferrer"
            title="Twitter profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/sgwynn"
            target="_blank"
            rel="noreferrer"
            title="Instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-center mt-5">
          ✌️ This project was coded Sarah Gwynn, and it is
          <a
            href="https://github.com/sarahanngwynn/Portfolio-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}
