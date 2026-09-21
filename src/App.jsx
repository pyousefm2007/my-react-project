import { useEffect, useRef, useState } from "react";
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

useEffect(() => {
  const sections = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

 sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 80000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && (
        
<div className="loading-screen">
   <div className="falling-code">
     <i className="devicon-react-original"></i>
        <i className="devicon-github-original"></i>
            <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
             <i className="devicon-javascript-plain"></i>
            <i className="devicon-nodejs-plain"></i>
           <i className="devicon-bootstrap-plain"></i>
          <i className="devicon-vscode-plain"></i>
        <i className="devicon-figma-plain"></i>
    <i className="devicon-bootstrap-plain"></i>
  </div>
  <div className="spinner">
    <div className="spinner-ring"></div>
    <div className="spinner-content">
      <img
        src="public/imge-mohamed.jpeg"
        alt="Mohamed Mahmoud"
        className="spinner-image"
      />
      <div className="spinner-name">
        <span className="name-white">Mohamed</span>
        <span className="name-purple">Mahmoud</span>
      </div>
    </div>
  </div>
</div>
      )}

      <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}>
        <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>

  <nav className="navbar">
   <div className="navbar-logo">
    Mohamed <span>Mahmoud</span>
  </div>
   <div className='navbar-links'>
    <a href="#home">Home</a>
     <a href="#about">About</a>
       <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      <a href="#servises">Servises</a>
     <a href="#contact">Contact</a>
   </div>
</nav>

<section className="hero" id='home'>
  <div className='hero-contact'>
   <p className='hero-small'>
    <span className="purple-dot"></span>
    Hello,im</p>
   <h1>Mohamed <span>Mahmoud</span></h1>
   <h2>Frontend Developer</h2>
   <p className='hero-text'> I build modern, responsive, and user-friendly websites using <span>React, HTML, and CSS.</span> I focus on clean designs, smooth experiences, and websites that work perfectly across all devices.</p>
    <button className='hero-btn'>
      View My Projects
      <span className="arrow">→</span>
    </button>
    <button className='hero-btns'>
      Contact Me
      <span className="message-icon">✉</span>
    </button>
    <div className='git'>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-square-x-twitter"></i>
  </div>
  </div>
 <div className="hero-image">
  <img src="public/imge-mohamed.jpeg" alt="Mo"/>
</div>
</section>

<section className="about scroll-animation" id='about'>
  <div className="about-content">
  <p className="about-small">
    <span className="meteor"></span>
    About Me</p>
    <h2> Who <span> I </span> Am </h2>
    <p className='about-text'>
      <span>I’m Mohamed Mahmoud</span>, a passionate Frontend devaloper from Egypt, I’m currently studying and i love building beautiful and functional websites.
       i enjoy solving problems, learning new skills and turning ideas into real projects.
    </p>
    <div className="personal-info">

  <p className="location">
    <i className="fa-solid fa-location-dot"></i>
    Assiut, Egypt
  </p>

  <p className="location">
    <i className="fa-solid fa-graduation-cap"></i>
    Student
  </p>

  <p className="location">
    <i className="fa-solid fa-book-open"></i>
    Always Learning
  </p>
</div>

  <button className="about-btn">
  Download CV
  <i className="fa-solid fa-download"></i>
</button>
</div>


<div className="about-image">
  <div className="about-image-decoration">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/071/061/587/small/coding-on-laptop-screen-with-hands-programming-in-dark-room-free-photo.jpg"
      alt=".."
    />
  </div>
</div>
</section>

<section className='skills scroll-animation' id='skills'>
  <div className='skills-header'>
    <div className='section-title'>
      <span className="meteor"></span>
      <h2> <span>My</span> Skills </h2>
      <p> Technologies and tools I work With </p>
    </div>
     <div className="skills-grid">
  <div className="skill-card">
    <div className="skill-icon">
      <i className="fa-brands fa-react"></i>
    </div>
    <h3>React</h3>
    <p>Advanced</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i class="fa-brands fa-html5"></i>
    </div>
    <h3>HTML</h3>
    <p>Advanced</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i class="fa-brands fa-css3-alt"></i>
    </div>
    <h3>CSS</h3>
    <p>Advanced</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i class="fa-brands fa-square-js"></i>
    </div>
    <h3>JavaScript</h3>
    <p>Intermediate</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i class="fa-brands fa-bootstrap"></i>
    </div>
    <h3>Bootstrap</h3>
    <p>Intermediate</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
     <i class="fa-brands fa-github"></i>
    </div>
    <h3>github</h3>
    <p>Intermediate</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i className="devicon-vscode-plain"></i>
    </div>
    <h3>vs code</h3>
    <p>Advanced</p>
  </div>
  <div className="skill-card">
    <div className="skill-icon">
      <i class="fa-brands fa-figma"></i>
    </div>
    <h3>Figma</h3>
     <p>Basic</p>
   </div>
  </div>  
 </div>
</section>

<section className='projects scroll-animation' id='projects'>
  <div className='project-header'>
    <div className='section-title'>
      <span className="meteor"></span>
      <h2>My <span>Projects</span></h2>
      <p>Some of my recent work</p>
    </div>
  <div className='projects-grid'>
    <div className='project-card'>
      <img src="public/Image-garage.jpeg" alt="" />
      <div className='project-content'>
        <h3>Garage<span>360</span></h3>
        <p>A modern Frontend website, build width React, HTML and CSS</p>
      </div>
      <div className='project-buttons'>
        <button>React</button>
        <button>HTML</button>
        <button>CSS</button>
         <button className="project-btn">
         <i className="fa-solid fa-arrow-right"></i>
       </button>
      </div>
    </div>
    <div className='project-card'>
      <img src="public/Image-botsland.jpeg" alt="" />
      <div className='project-content'>
        <h3>B<span>oo</span>tsland</h3>
        <p>A Responsive Website designed with a modern and clean interface.</p>
      </div>
      <div className='project-buttons'>
        <button>React</button>
        <button>HTML</button>
        <button>CSS</button>
        <button className="project-btn">
         <i className="fa-solid fa-arrow-right"></i>
       </button>
      </div>
    </div>
    <div className='project-card'>
      <img src="public/Image-university.jpeg" alt="" />
      <div className='project-content'>
        <h3>Colorlib<span> UNIVERSITY</span></h3>
        <p>A modern Frontend website, build width React, HTML and CSS</p>
      </div>
      <div className='project-buttons'>
        <button>Boot<br/>Strab</button>
        <button>HTML</button>
        <button>CSS</button>
        <button className="project-btn">
         <i className="fa-solid fa-arrow-right"></i>
       </button>
      </div>
    </div>
  </div>
  </div>
</section>

<section>
  <div className="services scroll-animation" id="services">
    <div className="services-header">
      <span className="meteor"></span>
      <h2>
        My<span>Services</span>
      </h2>
      <p>What I Can Do For You</p>
    </div>
    <div className="services-grid">
      <div className="services-card">
        <i className="fa-solid fa-code"></i>
        <h3><span>Web</span> Development</h3>
        <p>
          Build modern and responsive websites using the latest technologies.
        </p>
      </div>
      <div className="services-card">
        <i class="fa-solid fa-paintbrush"></i>
        <h3><span>UI/UX </span>Design</h3>
        <p>
          Creat Clean and User-Frindly interfaces with great, exprience.
        </p>
      </div>
      <div className="services-card">
        <i class="fa-solid fa-mobile-screen-button"></i>
        <h3><span>Responsive </span>Design</h3>
        <p>
          Make Your Website Look perfect on all devices (desktop, tablet, mobile).
        </p>
      </div>
      <div className="services-card">
        <i class="fa-solid fa-bolt"></i>
        <h3><span>Website </span>Optimization</h3>
        <p>
           Improve Speed, Performance, and SEO for better results.
        </p>
      </div>
      <div className="services-card">
        <i className="fa-solid fa-code"></i>
        <h3><span>Bug </span>Fixing</h3>
        <p>
          Find and Fix Issues in your, Websites.
        </p>
      </div>
      <div className="services-card">
        <i className="fa-solid fa-code"></i>
        <h3>Maintenance <span>& </span>Support</h3>
        <p>
          Ongoing Support and Updates for, Your Projects
        </p>
      </div>
    </div>
  </div>
</section>

 <section className="contact scroll-animation" id="contact">
  <div className="contact-header">
    <span className="meteor"></span>
    <h2>Get <span>In</span>Touch</h2>
    <p>
      Have a project in mind that I can bring to life, or just want to say hi?
      I'd love to hear from you</p>
  </div>
  <div className="contact-content">
    <div className="contact-info">
      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div>
          <span>Email</span>
          <p>Pyousef.m2007@gmail.com</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-solid fa-phone"></i>
        </div>
        <div>
          <span>Phone</span>
          <p>+011 215 116 29</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <span>Location</span>
          <p>Assiut, Egypt</p>
        </div>
      </div>
      <div className="contact-socials">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-x-twitter"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
    </div>
    <form className="contact-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Your name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Your email" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Your message"></textarea>
      </div>
      <button type="submit">
        <i className="fa-regular fa-paper-plane"></i>
        Send message
      </button>
    </form>
  </div>
</section>

<section className='cta-section scroll-animation'>
 <div className='cta-content'>
  <h2>Let's Build Something Great</h2>
   <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
</div>
<button className='cta-btn'>
   <i className="fa-regular fa-envelope"></i>
   Contact Me
</button>
</section>

<footer className="footer scroll-animation">

  <div className="footer-top">

    {/* Left Side */}
    <div className="footer-left">

      <h2>
        Mohamed <span>Mahmoud</span>
      </h2>

      <p className="footer-role">
        Frontend Developer
        <span>•</span>
        React
        <span>•</span>
        HTML
        <span>•</span>
        CSS
        <span>•</span>
        JavaScript
      </p>

      <div className="footer-socials">

        <a href="#">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="#">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="#">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

      </div>

    </div>


    {/* Right Side */}
    <div className="footer-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>

    </div>

  </div>


  {/* Divider */}
  <div className="footer-divider"></div>


  {/* Bottom */}
  <div className="footer-bottom">

    <p>
      © 2026 Mohamed Mahmoud. All rights reserved.
    </p>

    <a href="#home" className="back-top">
      Back to top
      <i className="fa-solid fa-arrow-up"></i>
    </a>

  </div>

</footer>












   
   </div> 
   </>  
  );
}

export default App
