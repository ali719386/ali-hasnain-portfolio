import './Experience.css';

const LOG = [
  {
    date: 'Nov 2025 — Jan 2026',
    title: 'Software Engineer Intern — Sofrix',
    body: 'Full-stack work with React and Next.js, building responsive interfaces and wiring them to backend logic. Picked up state management patterns and how a modern web app is actually architected end to end.',
    tags: ['React', 'Next.js', 'Frontend'],
  },
  {
    date: 'Jul 2025 — Sep 2025',
    title: 'Python Developer Intern — Code Sentinel',
    body: 'Backend-focused internship building web applications with Python, Django and Flask. Contributed to REST APIs and database integration, and debugged alongside senior developers with an eye on maintainable, secure code.',
    tags: ['Python', 'Django', 'Flask', 'REST APIs'],
  },
];

const EDU = [
  {
    date: '2022 — 2026',
    title: 'BS Software Engineering',
    place: 'Riphah International University, Faisalabad',
    note: 'CGPA 3.51 · Completed'
  },
  {
    date: '2020 — 2022',
    title: 'FSc Pre-Medical',
    place: 'Faisalabad',
    note: 'Biology, chemistry, analytical foundations'
  },
  {
    date: '2018 — 2020',
    title: 'Matriculation',
    place: 'Faisalabad',
    note: 'Science group'
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

        <div className="exp-cols">

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

          <aside className="exp-edu">

            <h4>Education</h4>

            {EDU.map(e => (
              <div className="edu-item" key={e.title}>

                <span className="edu-date">
                  {e.date}
                </span>

                <span className="edu-title">
                  {e.title}
                </span>

                <span className="edu-place">
                  {e.place}
                </span>

                <span className="edu-note">
                  {e.note}
                </span>

              </div>
            ))}

          </aside>

        </div>
      </div>
    </section>
  );
}