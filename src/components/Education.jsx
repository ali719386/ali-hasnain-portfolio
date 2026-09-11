import './Education.css';

const EDU = [
  {
    date: 'Oct 2022 - Jun 2026',
    title: 'BS Software Engineering',
    place: 'Riphah International University, Faisalabad',
    logo: '/images/Riphah.jpg',
    note: 'CGPA 3.51 · Completed',
  },

  {
    date: '2020 - 2022',
    title: 'FSc Pre-Medical',
    place: 'KIPS College, Faisalabad',
    logo: '/images/kipsLogo.png',
    note: 'Biology, Chemistry & Analytical Foundations',
  },

  {
    date: '2018 - 2020',
    title: 'Matriculation',
    place: 'Hassan Bin Sabit School, Faisalabad',
    logo: '/images/Hassan Bin Sabit .png',
    note: 'Science Group',
  },
];

const CERTIFICATIONS = [
  {
    date: 'Apr 2025',
    title: 'Web Development',
    issuer: 'TecnSol Trainings Official',
    logo: '/images/Tecnsol.jpg',
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Python',
      'Django',
      'Flask',
      'SQL',
      'MongoDB',
      'React',
      'Node.js',
      'Express',
      'RESTful APIs',
      'Web Development',
    ],
  },

  {
    date: 'Jan 2025',
    title: 'IT Essentials',
    issuer: 'Cisco',
    logo: '/images/cisco.jpg',
    skills: [
      'Networking',
      'Hardware',
      'Operating Systems',
      'IT Support',
    ],
  },

  {
    date: 'Aug 2025 — Sep 2025',
    title: 'Python Developer',
    issuer: 'Code Sentinel',
    logo: '/images/code.jpg',
    skills: [
      'Python',
      'OOP',
      'CRUD',
      'API Integration',
      'Git & GitHub',
    ],
  },

  {
    date: 'July 24, 2026',
    title: 'Software Engineer Intern',
    issuer: 'SOFRIX',
    logoText: 'SOFRIX',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Generative AI',
      'LLMs',
      'Hugging Face',
      'Flask',
      'OpenCV',
      'Git & GitHub',
    ],
  },
];

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="wrap">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="section-head education-head">
          <span className="eyebrow">Credentials</span>

          <h2>Education &amp; Certifications</h2>

          <p>
            My academic background and professional credentials that have
            shaped my expertise and technical journey.
          </p>
        </div>


        {/* ================================
            ACADEMIC BACKGROUND
        ================================= */}

        <div className="education-block">

          <div className="education-block-title">
            <h3>Academic Background</h3>
          </div>


          <div className="edu-grid">

            {EDU.map((e) => (

              <article
                className="edu-card"
                key={e.title}
              >

                <div className="edu-card-top">

                  {e.logo ? (

                    <div className="edu-logo-wrap">

                      <img
                        src={e.logo}
                        alt={`${e.place} logo`}
                        className="edu-logo"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';

                          const fallback =
                            event.currentTarget.parentElement.querySelector(
                              '.edu-logo-fallback'
                            );

                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />

                      <span
                        className="edu-logo-fallback"
                        aria-hidden="true"
                        style={{ display: 'none' }}
                      >
                        🎓
                      </span>

                    </div>

                  ) : (

                    <span
                      className="edu-icon"
                      aria-hidden="true"
                    >
                      {e.icon || '🎓'}
                    </span>

                  )}

                  <span className="edu-date">
                    {e.date}
                  </span>

                </div>


                <h3 className="edu-title">
                  {e.title}
                </h3>


                <span className="edu-place">
                  {e.place}
                </span>


                <div className="edu-divider" />


                <span className="edu-note">
                  {e.note}
                </span>

              </article>

            ))}

          </div>

        </div>


        {/* ================================
            CERTIFICATIONS
        ================================= */}

        <div className="certifications-block">

          <div className="education-block-title">
            <h3>Certifications &amp; Training</h3>
          </div>


          <div className="cert-grid">

            {CERTIFICATIONS.map((cert) => (

              <article
                className="cert-card"
                key={cert.title}
              >

                <div className="cert-logo-wrap">

                  {cert.logo ? (

                    <>
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="cert-logo"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';

                          const fallback =
                            event.currentTarget.parentElement.querySelector(
                              '.cert-logo-fallback'
                            );

                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />

                      <span
                        className="cert-logo-fallback"
                        aria-hidden="true"
                        style={{ display: 'none' }}
                      >
                        🏢
                      </span>
                    </>

                  ) : (

                    <span className="cert-logo-text">
                      {cert.logoText}
                    </span>

                  )}

                </div>


                <div className="cert-content">

                  <span className="cert-date">
                    Issued {cert.date}
                  </span>


                  <h3 className="cert-title">
                    {cert.title}
                  </h3>


                  <p className="cert-issuer">
                    {cert.issuer}
                  </p>


                  <div className="cert-skills">

                    {cert.skills.map((skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}