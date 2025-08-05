import './App.css';
import resumePDF from './assets/resume.pdf';

function App() {
  return (
    <main className="container">
     <header className="profile-header">
      <img src="/profile3.jpg" alt="Profile" className="profile-image" />
      <div className="profile-content">
        <h1>Riya Jain</h1>
        <p>Computer Science @ UIUC • Current Software Engineering Intern @ IMC Trading</p>
        <p className="fun-description">
      Hi! I'm a software engineer studying CS at UIUC. I'm really passionate about building scalable systems and solving challenging problems. When I'm not coding, I love competitive dancing, exploring new technologies, and diving into a good book.
    </p>
        <div className="links">
          <a href="mailto:riyajj2@illinois.edu">📧 Email</a>
          <a href="https://github.com/riyaj5246" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://linkedin.com/in/riya-jain-uofi" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href={resumePDF} download>📄 Resume</a>
        </div>
      </div>
    </header>

      {/* All your existing sections unchanged */}
      <section className="experience">
        <h2>Experience</h2>

        <article className="job">
          <h3>IMC Trading — SWE Intern</h3>
          <p>Rearchitected messaging infrastructure to reduce network traffic by 66% and designed a scalable downsampling service for pricing data.</p>
        </article>

        <article className="job">
          <h3>SIG — SWE Intern</h3>
          <p>Built a high-performance risk dashboard for 1.5M+ options and implemented a backtested crypto trading strategy.</p>
        </article>

        <article className="job">
          <h3>Argonne National Lab — ML Developer Intern</h3>
          <p>Researched and deployed transformer- and graph-based ML models (AtomGPT, ALIGNN) for materials property prediction on Gardens.AI.</p>
        </article>

        <article className="job">
          <h3>Disruption Lab — Engineering Manager</h3>
          <p>Led organization growth initiatives, managed 5+ teams, and developed a privacy-focused data exchange platform for hospital research.</p>
        </article>

        <article className="job">
          <h3>Shedd Capital — SWE Intern</h3>
          <p>Contributed to front-end migration from Django templates to Vue.js; improved data infrastructure and webcrawler efficiency by 130%.</p>
        </article>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <article className="project">
          <h3>Fault-Tolerant Streaming & Storage Distributed System</h3>
          <p>Implemented a fault-tolerant distributed system with SWIM failure detection, ring-based DFS, and high-parallelism stream processing.</p>
        </article>

        <article className="project">
          <h3>Los Angeles CrimeLens</h3>
          <p>Developed a React-based crime reporting and visualization tool with advanced SQL queries, full CRUD, and normalized database design.</p>
        </article>
      </section>

    </main>
  );
}

export default App;
