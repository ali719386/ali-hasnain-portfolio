import './Experience.css';

const LOG = [
  {
    date: 'Nov 2025 - Jan 2026',
    title: 'Software Engineer Intern - Sofrix',
    body: 'Full-stack work with React and Next.js, building responsive interfaces and wiring them to backend logic. Picked up state management patterns and how a modern web app is actually architected end to end.',
    tags: ['React', 'Next.js', 'Frontend'],
  },
  {
    date: 'Jul 2025 - Sep 2025',
    title: 'Python Developer Intern - Code Sentinel',
    body: 'Backend-focused internship building web applications with Python, Django and Flask. Contributed to REST APIs and database integration, and debugged alongside senior developers with an eye on maintainable, secure code.',
    tags: ['Python', 'Django', 'Flask', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section className="section experience" id="work">
      <div className="wrap">

        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Where the hours went:</h2>
          <p>
            Two internships, one final-year project, and a habit of finishing what I start.
          </p>
        </div>

        <div className="exp-log">

          {LOG.map((item) => (
            <div className="exp-commit" key={item.title}>

              <div className="exp-commit-rail">
                <span className="exp-dot" />
                <span className="exp-line" />
              </div>

              <div className="exp-commit-body">

                <h3>{item.title}</h3>

                <span className="exp-date">
                  {item.date}
                </span>

                <p>{item.body}</p>

                <div className="exp-tags">
                  {item.tags.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}