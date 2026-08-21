import { useState } from 'react';
import './About.css';

const FACTS = [
  ['Based in', 'Faisalabad, Pakistan'],
  ['Open to', 'Open TO Work For Full Time Roles'],
  ['Degree', 'BS Software Engineering'],
  ['University', 'Riphah International University'],
  ['CGPA', '3.51'],
  ['Availability', 'Full-time & Freelance'],
];

const SKILLS = [
  'Backend Architecture',
  'REST API Development',
  'Database Design',
  'Full-Stack Applications',
  'AI / ML Integration',
  'Debugging & Deployment',
  'Version Control (Git)',
  'Scalable System Design',
];

export default function About() {
  const [flipped, setFlipped] = useState(false);

  const handlePhotoClick = () => setFlipped((v) => !v);

  return (
    <section className="section about" id="about">

      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <div className="about-title-box">
            <span className="eyebrow">ABOUT ME</span>
          </div>

          <p>ALLOW ME TO INTRODUCE MYSELF:</p>
        </div>


        {/* Introduction */}
        <div className="about-intro">
          <div className="about-intro-left">
            <div
              className="about-photo-flip"
              onClick={handlePhotoClick}
              role="button"
              tabIndex={0}
              aria-label="Flip photo"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePhotoClick(); }}
            >
              <div className={`about-photo-inner${flipped ? ' is-flipped' : ''}`}>
                <div className="about-photo-face about-photo-front">
                  <img src="/images/Ali image.jpg" alt="Ali Hasnain" />
                </div>
                <div className="about-photo-face about-photo-back">
                  <span className="about-photo-back-name">Ali Hasnain</span>
                  <span className="about-photo-back-role">Software Engineer</span>
                  <span className="about-photo-back-tag">code • career • growth</span>
                </div>
              </div>
            </div>
            <span className="about-handwritten">
              Software Engineer
              <br />
              code • career • growth
            </span>
          </div>

          <div className="about-intro-content">

            <p className="about-lede">
              I'm a Software Engineer who likes turning ambiguous
              problems into working systems.
            </p>

            <p className="about-p">
              I build backend and full-stack applications, and I'm
              equally comfortable training a model as I am debugging
              a deployment pipeline until it finally cooperates.
            </p>

            <p className="about-p">
              For my final year project, I built
              EmotionSense, a multimodal AI system
              that reads emotion from face, voice, and text.
              The system combines a CNN for facial expression,
              a custom voice model trained on the RAVDESS dataset,
              and a transformer-based text classifier into one
              confidence-weighted pipeline.
            </p>

            <p className="about-p">
              I completed my BS in Software Engineering at
              Riphah International University, Faisalabad with
              a <strong>3.51 CGPA.</strong> I also gained practical experience through
              internships as a Python Developer at Code Sentinel
              and as a Software Engineer Intern at Sofrix.
            </p>

            <p className="about-p">
              I'm currently open to backend and full-stack Python
              developer roles where I can build scalable systems
              and continue growing as an engineer.
            </p>

          </div>
        </div>


        {/* Bottom Section */}
        <div className="about-bottom">

          {/* Things I Love */}
          <div className="about-love">

            <div className="section-mini-heading">
              <span>THINGS I LOVE</span>
            </div>

            <div className="love-items">
              <div className="love-item">
                <span>01</span>
                <h3>Building</h3>
                <p>Turning ideas into working products.</p>
              </div>

              <div className="love-item">
                <span>02</span>
                <h3>Learning</h3>
                <p>Going deeper when technology gets difficult.</p>
              </div>

              <div className="love-item">
                <span>03</span>
                <h3>Problem Solving</h3>
                <p>Breaking complex problems into simple systems.</p>
              </div>
            </div>

          </div>


          {/* What I Can Do */}
          <div className="about-skills">

            <div className="section-mini-heading">
              <span>WHAT I CAN DO</span>
            </div>

            <div className="skill-list">
              {SKILLS.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-plus">+</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* Facts */}
        <div className="about-facts">

          {FACTS.map(([key, value]) => (
            <div className="about-fact" key={key}>
              <span className="about-fact-k">
                {key}
              </span>

              <span className="about-fact-v">
                {value}
              </span>
            </div>
          ))}

        </div>


        {/* CTA */}
        <div className="about-cta-wrapper">
          <a
            href="#contact"
            className="btn btn-primary about-cta"
          >
            Let's talk →
          </a>
        </div>

      </div>

    </section>
  );
}