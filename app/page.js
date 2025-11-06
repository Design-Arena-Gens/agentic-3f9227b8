import './styles.css'

export default function Home() {
  return (
    <main className="main">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Nexaurro</div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Transform Your Digital Presence</h1>
          <p className="hero-subtitle">
            Elevate your business with cutting-edge digital solutions tailored to your success
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Marketing</h3>
              <p>
                Amplify your brand reach with data-driven marketing strategies that deliver measurable results and ROI.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Website Development</h3>
              <p>
                Build stunning, responsive websites that captivate your audience and drive conversions with modern technologies.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Create intuitive, beautiful user experiences that keep your customers engaged and coming back for more.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Business Solutions</h3>
              <p>
                Streamline operations and accelerate growth with tailored business solutions designed for your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Why Choose Nexaurro?</h2>
          <div className="about-content">
            <div className="about-item">
              <h3>Expert Team</h3>
              <p>Our seasoned professionals bring years of industry experience to every project.</p>
            </div>
            <div className="about-item">
              <h3>Proven Results</h3>
              <p>Track record of delivering successful digital solutions for businesses of all sizes.</p>
            </div>
            <div className="about-item">
              <h3>Client-Focused</h3>
              <p>Your success is our priority. We work closely with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="contact-subtitle">Let's discuss how we can help transform your digital presence</p>
          <button className="cta-button">Contact Us Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Nexaurro. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
