import './Projects.css';

const GITHUB_ICON = (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482
      0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465
      -.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087
      2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943
      0-1.091.39-1.984 1.03-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269
      2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337
      c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647
      .64.7 1.028 1.593 1.028 2.684 0 3.842-2.339 4.687-4.566 4.936
      .359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743
      0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
    />
  </svg>
);

const PROJECTS = [
  {
    name: 'Employee Management System',
    desc: 'CRUD-driven internal tool for managing employee records with role-based structure.',
    stack: ['Python', 'Django', 'MySQL'],
    github: 'https://github.com/ali719386/employee-management-system',
  },
  {
    name: 'E-commerce Website',
    desc: 'Product catalog, cart and order flow built end to end on a Django backend.',
    stack: ['Django', 'Python', 'JavaScript'],
    github: 'https://github.com/ali719386/ecommerce-website-django',
  },
  {
    name: 'Todo List Application',
    desc: 'Task manager pairing a Next.js frontend with a Django + PostgreSQL backend.',
    stack: ['Next.js', 'Django', 'PostgreSQL'],
    github: 'https://github.com/ali719386/todo-app',
  },
  {
    name: 'Gourmet Management System',
    desc: 'Management system designed to handle structured records, workflows and day-to-day operations.',
    stack: ['Python', 'Django', 'MySQL'],
    github: 'https://github.com/ali719386/Gourmet-Management-System',
  },
];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">

        <div className="section-head">
          <span className="eyebrow">projects</span>

          <h2>Things I've shipped.</h2>

          <p>
            One flagship, plus the backend-heavy builds that got me there.
          </p>
        </div>

        {/* ================================
            FLAGSHIP PROJECTS
        ================================= */}

        <div className="flagship-grid">

          {/* EmotionSense */}

          <div className="flagship">

            <div className="flagship-tag">

              <span className="status-chip status-live">
                FINAL YEAR PROJECT
              </span>

              <span className="flagship-live">
              
              </span>

              <a
                href="https://github.com/ali719386/face_emotion"
                target="_blank"
                rel="noreferrer"
                className="project-github"
                aria-label="View EmotionSense on GitHub"
                title="View on GitHub"
              >
                {GITHUB_ICON}
              </a>

            </div>

            <h3>EmotionSense</h3>

            <p className="flagship-desc">
              A multimodal emotion-detection system that reads face, voice and
              text together instead of in isolation — face via DeepFace/CNN,
              voice via a custom CNN trained on RAVDESS with librosa features,
              and text via a fine-tuned DistilRoBERTa transformer. A weighted
              confidence-fusion layer combines all three into a single read,
              served through a Flask app currently being deployed on Render.
            </p>

            <div className="flagship-stack">
              {[
                'Python',
                'Flask',
                'DeepFace',
                'PyTorch/Keras',
                'librosa',
                'HuggingFace Transformers',
                'Render',
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

          </div>


          {/* AI Voice & Gesture Control */}

          <div className="flagship">

            <div className="flagship-tag">

              <span className="status-chip status-200">
                AI / COMPUTER VISION
              </span>

              <span className="flagship-live">
              
              </span>

              <a
                href="https://github.com/ali719386/gesture-voice-control"
                target="_blank"
                rel="noreferrer"
                className="project-github"
                aria-label="View AI Voice and Gesture Control System on GitHub"
                title="View on GitHub"
              >
                {GITHUB_ICON}
              </a>

            </div>

            <h3>AI Voice &amp; Gesture Control System</h3>

            <p className="flagship-desc">
              An AI-powered desktop control system that lets users interact
              with their computer through natural voice commands and real-time
              hand gestures. The system combines a modern React interface,
              Gemini-powered AI intelligence, computer vision and a Node.js
              system bridge to execute real-world desktop actions.
            </p>

            <div className="flagship-stack">
              {[
                'React 19',
                'Vite',
                'Tailwind CSS',
                'Framer Motion',
                'Lucide Icons',
                'Node.js',
                 'Python',
                'Express.js',
                'Google Gemini API',
                'WScript.Shell',
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

          </div>

        </div>


        {/* ================================
            OTHER PROJECTS
        ================================= */}

        <div className="project-grid">

          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>

              <div className="project-card-head">

                <h4>{p.name}</h4>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                    aria-label={`View ${p.name} on GitHub`}
                    title="View on GitHub"
                  >
                    {GITHUB_ICON}
                  </a>
                )}

              </div>

              <p>{p.desc}</p>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

            </div>
          ))}

        </div>


        {/* ================================
            GITHUB PROFILE
        ================================= */}

        <a
          href="https://github.com/ali719386"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost projects-more"
        >
          More on GitHub →
        </a>

      </div>
    </section>
  );
}