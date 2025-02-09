import "../styles/partials/_single_page.scss";
import contactImage from "../assets/images/about.png";
import Title from "../components/Title";
import SocialDetails from "../components/SocialDetails";
import React from "react";

function AboutPage() {
  return (
    <section className="section single-page">
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img className="hero-photo" src={contactImage} alt="contact" />
          </article>
          <article className="about-info">
            <Title title="About Me" className="about-title" />
            <p>I don’t just work with computers; I think of them as my canvas, my playground, and sometimes even my puzzle box. What drives me is the thrill of creating something out of nothing, whether it’s a sleek piece of software, a doodle of a Mars colony, or a new way to solve an old problem.</p>
            <p>I’m a software engineer with a deep curiosity for how things work. Give me a challenge, and I’ll dive headfirst into exploring, learning, and building. I’ve had the privilege of working with cutting-edge technologies and contributing to open-source projects, but what excites me most is the opportunity to grow and expand my knowledge every day.</p>
            <p>I earned my bachelor’s degree in ICT from Ahmedabad University, where hands-on, project-based learning shaped my love for building real-world solutions. Currently, I’m pursuing my master’s in Computer Science at Arizona State University, delving deeper into cloud computing, distributed systems, and security.</p>
            <p>When I’m not coding, you’ll find me with a paintbrush in hand, sketching alien worlds or doodling futuristic colonies. Art fuels my creativity, inspiring me to bring a touch of imagination into everything I create.</p>
            {/* <p>Let’s connect and build something extraordinary—both in code and in life!</p> */}
            <p>
              <a
                href="https://github.com/rajvi-patel-22/rajvi-patel-22.github.io/raw/main/src/assets/resume/RajviPatel_Resume.pdf" //TODO: add resume
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-btn"
              >
                Resume
              </a>
            </p>
            <SocialDetails />
          </article>
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
