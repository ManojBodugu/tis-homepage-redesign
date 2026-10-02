import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const stats = [
  ["22", "Acre Campus"],
  ["16+", "Olympic Sports"],
  ["24/7", "Medical Assistance"],
  ["5:1", "Student Teacher Ratio"],
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <header className="navbar">
        <a href="#home" className="logo">
          TULA'S INTERNATIONAL SCHOOL
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#campus">Campus</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "◐"}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content reveal">
            <p className="eyebrow">THE MODERN GURUKUL · DEHRADUN</p>

            <h1>
              Enlightening
              <br />
              <em>through</em>
              <br />
              education.
            </h1>

            <p className="hero-text">
              A co-educational boarding school where academic excellence,
              character, creativity and opportunity come together.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Explore Tula's
              </a>
              <a href="#about" className="secondary-button">
                Discover more ↓
              </a>
            </div>
          </div>

          <div className="hero-orbit">
            <div className="orbit-circle">
              <span>LEARN</span>
              <span>GROW</span>
              <span>LEAD</span>
            </div>
          </div>
        </section>

        <motion.section className="stats-section" id="about" initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="section-heading reveal">
            <p className="eyebrow">AT A GLANCE</p>
            <h2>More than a school.</h2>
          </div>

          <div className="stats-grid">
            {stats.map(([number, label]) => (
              <div className="stat-card reveal" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="experience-section" id="experience">
          <div className="experience-text reveal">
            <p className="eyebrow">THE TULA EXPERIENCE</p>
            <h2>Where learning becomes a way of life.</h2>
            <p>
              Tula's combines rigorous academics with sport, creativity,
              leadership and a strong sense of community.
            </p>
          </div>

          <div className="experience-card reveal">
            <span>01</span>
            <h3>Academic Excellence</h3>
            <p>
              A learning environment designed to encourage curiosity,
              confidence and independent thinking.
            </p>
          </div>

          <div className="experience-card reveal">
            <span>02</span>
            <h3>Life Beyond Classrooms</h3>
            <p>
              Sports, arts, outdoor activities and experiences that help
              students discover their strengths.
            </p>
          </div>
        </section>

        <section className="campus-section" id="campus">
          <div className="campus-content reveal">
            <p className="eyebrow">THE CAMPUS</p>
            <h2>
              Space to
              <br />
              <em>think bigger.</em>
            </h2>
            <p>
              A thoughtfully designed residential campus in Dehradun,
              Uttarakhand, created for exploration, connection and growth.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content reveal">
            <p className="eyebrow">START THE JOURNEY</p>
            <h2>Discover what's possible.</h2>
            <a href="mailto:admissions@tulas.edu.in" className="primary-button">
              Contact Admissions →
            </a>
          </div>
        </section>
      </main>

      <footer>
        <strong>TULA'S</strong>
        <span>INTERNATIONAL SCHOOL</span>
        <p>Dhoolkot, Selaqui, Dehradun, Uttarakhand</p>
        <p>© 2026 Tula's International School</p>
      </footer>
    </div>
  );
}

export default App;