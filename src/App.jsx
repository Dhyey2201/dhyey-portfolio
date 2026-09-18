import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus(data.message);

      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Dhyey<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="container hero-content">

            <div className="hero-text">

              <div className="availability">
                <span className="status-dot"></span>
                Available for freelance projects
              </div>

              <p className="eyebrow">FULL-STACK DEVELOPER</p>

              <h1>
                I build digital
                <br />
                products for
                <br />
                <span>real businesses.</span>
              </h1>

              <p className="hero-description">
                I’m Dhyey Patel, a Full-Stack Developer specializing in
                business applications, management systems, dashboards,
                and AI-powered web applications.
              </p>

              <div className="hero-buttons">

                <a href="#contact" className="primary-button">
                  Start a Project
                  <span>↗</span>
                </a>

                <a href="#projects" className="secondary-button">
                  View My Work
                </a>

              </div>

              <div className="hero-socials">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

              </div>

              <div className="tech-line">
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

            </div>

            <div className="hero-visual">

              <div className="visual-circle"></div>

              <div className="developer-card">

                <div className="developer-card-top">
                  <span>01</span>
                  <span>DEVELOPER</span>
                </div>

                <div className="developer-avatar">
                  DP
                </div>

                <h3>Dhyey Patel</h3>

                <p>
                  Full-Stack Developer
                </p>

                <div className="developer-stack">
                  <span>React</span>
                  <span>Node</span>
                  <span>Python</span>
                  <span>PHP</span>
                </div>

                <div className="developer-card-bottom">
                  <span>Building software</span>
                  <span>2026</span>
                </div>

              </div>

              <div className="floating-card card-one">
                <strong>4+</strong>
                <span>Business Domains</span>
              </div>

              <div className="floating-card card-two">
                <strong>Full-Stack</strong>
                <span>Frontend → Backend</span>
              </div>

            </div>

          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">

            <div className="services-heading">
              <div>
                <p className="section-label">SERVICES</p>

                <h2>
                  From idea to
                  <br />
                  <span>working software.</span>
                </h2>
              </div>

              <p className="services-intro">
                Whether you need a new application, improvements to existing
                software, or AI features, I can help turn your requirements
                into a practical solution.
              </p>
            </div>


            <div className="services-list">

              {/* SERVICE 01 */}

              <div className="service-item">

                <div className="service-icon">
                  ↗
                </div>

                <div className="service-content">

                  <div className="service-meta">
                    <span>01</span>
                    <span>BUILD</span>
                  </div>

                  <h3>
                    Custom Web Applications
                  </h3>

                  <p>
                    Need software built specifically for your business?
                    I develop responsive web applications around your
                    actual workflows, users, and requirements.
                  </p>

                  <div className="service-features">
                    <span>Business Applications</span>
                    <span>Admin Panels</span>
                    <span>Dashboards</span>
                    <span>User Management</span>
                  </div>

                </div>

              </div>


              {/* SERVICE 02 */}

              <div className="service-item">

                <div className="service-icon">
                  ⚙
                </div>

                <div className="service-content">

                  <div className="service-meta">
                    <span>02</span>
                    <span>DEVELOP</span>
                  </div>

                  <h3>
                    Full-Stack Development
                  </h3>

                  <p>
                    I can handle both the frontend and backend of your
                    application, including APIs, business logic,
                    authentication, database integration, and deployment
                    preparation.
                  </p>

                  <div className="service-features">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                  </div>

                </div>

              </div>


              {/* SERVICE 03 */}

              <div className="service-item">

                <div className="service-icon">
                  ✦
                </div>

                <div className="service-content">

                  <div className="service-meta">
                    <span>03</span>
                    <span>IMPROVE</span>
                  </div>

                  <h3>
                    Existing Software & APIs
                  </h3>

                  <p>
                    Already have an application? I can help add new
                    features, create APIs, improve existing workflows,
                    connect systems, or build new modules without
                    starting everything from zero.
                  </p>

                  <div className="service-features">
                    <span>New Features</span>
                    <span>REST APIs</span>
                    <span>Database Work</span>
                    <span>Integrations</span>
                  </div>

                </div>

              </div>


              {/* SERVICE 04 */}

              <div className="service-item">

                <div className="service-icon">
                  AI
                </div>

                <div className="service-content">

                  <div className="service-meta">
                    <span>04</span>
                    <span>INTELLIGENCE</span>
                  </div>

                  <h3>
                    AI Integration
                  </h3>

                  <p>
                    Have an existing application and want to add AI?
                    I can integrate AI-powered features such as chatbots,
                    document analysis, intelligent search, data analysis,
                    and AI assistants.
                  </p>

                  <div className="service-features">
                    <span>AI Chatbots</span>
                    <span>RAG</span>
                    <span>Document Analysis</span>
                    <span>AI Assistants</span>
                  </div>

                </div>

              </div>

            </div>


            <div className="services-bottom">

              <div>
                <span className="services-bottom-number">01</span>
                <span>Understand the problem</span>
              </div>

              <div>
                <span className="services-bottom-number">02</span>
                <span>Design the solution</span>
              </div>

              <div>
                <span className="services-bottom-number">03</span>
                <span>Build the product</span>
              </div>

              <div>
                <span className="services-bottom-number">04</span>
                <span>Keep improving</span>
              </div>

            </div>

          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">

            <div className="projects-heading">
              <div>
                <p className="section-label">SELECTED WORK</p>

                <h2>
                  Systems I've
                  <br />
                  <span>worked on.</span>
                </h2>
              </div>

              <p className="projects-intro">
                Experience working on business applications across healthcare,
                education, HR, warehouse management, billing, and AI.
              </p>
            </div>

            <div className="project-list">

              {/* PROJECT 01 */}

              <article className="project-item">

                <div className="project-number">
                  01
                </div>

                <div className="project-main">

                  <div className="project-category">
                    HEALTHCARE
                  </div>

                  <h3>
                    Hospital Management System
                  </h3>

                  <p>
                    Worked on a business application designed to manage
                    hospital workflows and operational data, including
                    patient-related information, appointments, billing,
                    and administrative processes.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MySQL</span>
                    <span>REST API</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>


              {/* PROJECT 02 */}

              <article className="project-item">

                <div className="project-number">
                  02
                </div>

                <div className="project-main">

                  <div className="project-category">
                    INVENTORY & OPERATIONS
                  </div>

                  <h3>
                    Warehouse Management System
                  </h3>

                  <p>
                    Worked on software for managing warehouse operations,
                    inventory data, and business workflows, helping teams
                    manage operational information through a centralized
                    application.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MySQL</span>
                    <span>Dashboard</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>


              {/* PROJECT 03 */}

              <article className="project-item">

                <div className="project-number">
                  03
                </div>

                <div className="project-main">

                  <div className="project-category">
                    HR & MANAGEMENT
                  </div>

                  <h3>
                    HR Management System
                  </h3>

                  <p>
                    Worked on an HR management application for handling
                    employee-related information, administrative workflows,
                    and organizational data.
                  </p>

                  <div className="project-tags">
                    <span>PHP</span>
                    <span>CodeIgniter</span>
                    <span>MySQL</span>
                    <span>Admin Panel</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>


              {/* PROJECT 04 */}

              <article className="project-item">

                <div className="project-number">
                  04
                </div>

                <div className="project-main">

                  <div className="project-category">
                    EDUCATION
                  </div>

                  <h3>
                    Employee, Teacher & Student Training Portal
                  </h3>

                  <p>
                    Worked on a training platform supporting different
                    types of users and training workflows for employees,
                    teachers, and students.
                  </p>

                  <div className="project-tags">
                    <span>PHP</span>
                    <span>CodeIgniter</span>
                    <span>MySQL</span>
                    <span>Portal</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>


              {/* PROJECT 05 */}

              <article className="project-item">

                <div className="project-number">
                  05
                </div>

                <div className="project-main">

                  <div className="project-category">
                    BUSINESS
                  </div>

                  <h3>
                    Billing Software
                  </h3>

                  <p>
                    Worked on business billing software for managing
                    billing-related records, transactions, and
                    administrative operations.
                  </p>

                  <div className="project-tags">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>Business Logic</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>


              {/* PROJECT 06 */}

              <article className="project-item featured-project">

                <div className="project-number">
                  06
                </div>

                <div className="project-main">

                  <div className="project-category">
                    AI APPLICATION
                  </div>

                  <h3>
                    AI Resume Analyzer
                  </h3>

                  <p>
                    Personal AI project that analyzes resumes, extracts
                    information, identifies skills, and provides
                    job-related insights using a Python backend and
                    React frontend.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>React</span>
                    <span>AI</span>
                    <span>MySQL</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>

            </div>

            <div className="projects-note">
              <span>+</span>
              More business applications and personal projects coming soon.
            </div>

          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">

            <div className="about-heading">
              <div>
                <p className="section-label">ABOUT ME</p>

                <h2>
                  I turn business
                  <br />
                  requirements into
                  <br />
                  <span>working software.</span>
                </h2>
              </div>

              <div className="about-intro">
                <p>
                  I'm Dhyey Patel, a Full-Stack Developer focused on
                  building practical web applications and business
                  software.
                </p>

                <p>
                  My experience includes working on healthcare, HR,
                  education, training, warehouse, billing and other
                  business applications.
                </p>

                <p>
                  I work across frontend, backend and databases, and I
                  also build AI-powered applications using modern AI
                  technologies.
                </p>
              </div>
            </div>


            {/* EXPERIENCE STRIP */}

            <div className="experience-strip">

              <div className="experience-item">
                <strong>Full-Stack</strong>
                <span>Frontend + Backend</span>
              </div>

              <div className="experience-item">
                <strong>Business</strong>
                <span>Real-world applications</span>
              </div>

              <div className="experience-item">
                <strong>AI</strong>
                <span>Modern AI applications</span>
              </div>

              <div className="experience-item">
                <strong>API</strong>
                <span>System integrations</span>
              </div>

            </div>


            {/* TECH STACK */}

            <div className="stack-section">

              <div className="stack-heading">
                <p className="section-label">TECH STACK</p>

                <p>
                  Technologies I use to design and build applications.
                </p>
              </div>


              <div className="stack-grid">

                {/* FRONTEND */}

                <div className="stack-category">

                  <div className="stack-category-number">
                    01
                  </div>

                  <h3>Frontend</h3>

                  <div className="stack-items">

                    <div className="stack-item">
                      <span className="stack-symbol">R</span>
                      <div>
                        <strong>React</strong>
                        <small>Web applications</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">JS</span>
                      <div>
                        <strong>JavaScript</strong>
                        <small>Application logic</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">&lt;/&gt;</span>
                      <div>
                        <strong>HTML / CSS</strong>
                        <small>Responsive interfaces</small>
                      </div>
                    </div>

                  </div>

                </div>


                {/* BACKEND */}

                <div className="stack-category">

                  <div className="stack-category-number">
                    02
                  </div>

                  <h3>Backend</h3>

                  <div className="stack-items">

                    <div className="stack-item">
                      <span className="stack-symbol">N</span>
                      <div>
                        <strong>Node.js</strong>
                        <small>APIs & backend</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">Py</span>
                      <div>
                        <strong>Python</strong>
                        <small>Backend & AI</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">PHP</span>
                      <div>
                        <strong>PHP</strong>
                        <small>Business applications</small>
                      </div>
                    </div>

                  </div>

                </div>


                {/* DATABASE */}

                <div className="stack-category">

                  <div className="stack-category-number">
                    03
                  </div>

                  <h3>Database</h3>

                  <div className="stack-items">

                    <div className="stack-item">
                      <span className="stack-symbol">DB</span>
                      <div>
                        <strong>MySQL</strong>
                        <small>Relational database</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">SQL</span>
                      <div>
                        <strong>SQL</strong>
                        <small>Queries & data</small>
                      </div>
                    </div>

                  </div>

                </div>


                {/* AI */}

                <div className="stack-category">

                  <div className="stack-category-number">
                    04
                  </div>

                  <h3>AI</h3>

                  <div className="stack-items">

                    <div className="stack-item">
                      <span className="stack-symbol">AI</span>
                      <div>
                        <strong>LLM Applications</strong>
                        <small>AI-powered features</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">R</span>
                      <div>
                        <strong>RAG</strong>
                        <small>Document & knowledge search</small>
                      </div>
                    </div>

                    <div className="stack-item">
                      <span className="stack-symbol">V</span>
                      <div>
                        <strong>Embeddings</strong>
                        <small>Semantic search</small>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">

            <div className="contact-heading">
              <div>
                <p className="section-label">START A PROJECT</p>

                <h2>
                  Have an idea?
                  <br />
                  Let's make it
                  <br />
                  <span>real.</span>
                </h2>
              </div>

              <div className="contact-description">
                <p>
                  Tell me what you're trying to build, improve, or automate.
                  I'll review your requirements and we can discuss the
                  right approach.
                </p>
              </div>
            </div>


            <div className="contact-layout">

              {/* CONTACT INFORMATION */}

              <div className="contact-info">

                <div className="contact-info-block">

                  <span className="contact-label">
                    EMAIL
                  </span>

                  <a
                    href="mailto:your-email@example.com"
                    className="contact-email"
                  >
                    dhyeypatel2212001@gmail.com
                  </a>

                </div>


                <div className="contact-info-block">

                  <span className="contact-label">
                    SOCIAL
                  </span>

                  <div className="contact-socials">

                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn ↗
                    </a>

                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>


                <div className="contact-info-block">

                  <span className="contact-label">
                    SERVICES
                  </span>

                  <p>
                    Custom Software
                    <br />
                    Full-Stack Development
                    <br />
                    AI Integration
                    <br />
                    Existing Software Improvements
                  </p>

                </div>

              </div>


              {/* CONTACT FORM */}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="project">
                    What do you need?
                  </label>

                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Custom Web Application">
                      Custom Web Application
                    </option>
                    <option value="Full-Stack Development">
                      Full-Stack Development
                    </option>
                    <option value="Existing Software / API">
                      Existing Software / API
                    </option>
                    <option value="AI Integration">
                      AI Integration
                    </option>
                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="budget">
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Tell me about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Project Enquiry"}
                  <span>↗</span>
                </button>

              </form>

            </div>
            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>© 2026 Dhyey Patel. All rights reserved.</p>

          <div>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;