import './Education.css';

const EDU = [
  {
    date: 'Oct 2022 - Jun 2026',
    title: 'BS Software Engineering',
    place: 'Riphah International University, Faisalabad',
    logo:
      'https://media.licdn.com/dms/image/v2/C4E0BAQEeXNh2AieAdw/company-logo_100_100/company-logo_100_100/0/1631329416941?e=1788998400&v=beta&t=Ra4xHJJtXjyjzR6WvWjO9rWa3XX7gfIhod6RcVNqhY0',
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
    logo:
      'https://media.licdn.com/dms/image/v2/C4E0BAQG9UESRIYlRvQ/company-logo_100_100/company-logo_100_100/0/1630655350308?e=1788998400&v=beta&t=wK569CKtjF1TbgdESlGuYjkvvIZV5wGWlYyhHs2zpGw',
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Web Development',
    ],
  },

  {
    date: 'Jan 2025',
    title: 'IT Essentials',
    issuer: 'Cisco',
    logo:
      'https://media.licdn.com/dms/image/v2/D560BAQFYnR_Zrm87Dg/company-logo_100_100/B56ZnMyVr4HUAQ-/0/1760077372453/cisco_logo?e=1788998400&v=beta&t=Qnm2P-rXpCVP_O5yQkoMzgv3TvAn9E1eeP01tKmHKhI',
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
    logo:
      'https://media.licdn.com/dms/image/v2/D4D0BAQHT3j0WeCnPTQ/company-logo_100_100/B4DZe6VG9ZG8AQ-/0/1751177785595?e=1788998400&v=beta&t=Yf1vO9V3Dl5lJ0wscPIWrtUAsL9jgKI6TDg6lG_D5mo',
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

                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="cert-logo"
                    />

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