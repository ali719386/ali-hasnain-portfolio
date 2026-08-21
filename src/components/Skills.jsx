import { useState } from 'react';
import './Skills.css';

const SKILLS = [
  { name: 'Python',       category: 'Backend',      icon: 'python',      color: '#3776AB' },
  { name: 'Django',       category: 'Backend',      icon: 'django',      color: '#0C4B33' },
  { name: 'FastAPI',      category: 'Backend',      icon: 'fastapi',     color: '#009688' },
  { name: 'Flask',        category: 'Backend',      icon: 'flask',       color: '#8f8f8f', white: true },
  { name: 'Node.js',      category: 'Backend',      icon: 'nodedotjs',   color: '#339933' },
  { name: 'REST APIs',    category: 'Backend',      fallback: 'API',     color: '#4FB6A4' },

  { name: 'HTML5',        category: 'Frontend',     icon: 'html5',       color: '#E34F26' },
  { name: 'CSS3',         category: 'Frontend',     icon: 'css3',        color: '#1572B6' },
  { name: 'JavaScript',   category: 'Frontend',     icon: 'javascript',  color: '#F7DF1E' },
  { name: 'Bootstrap',    category: 'Frontend',     icon: 'bootstrap',   color: '#7952B3' },
  { name: 'React',        category: 'Frontend',     icon: 'react',       color: '#61DAFB' },
  { name: 'Next.js',      category: 'Frontend',     icon: 'nextdotjs',   color: '#8f8f8f', white: true },

  { name: 'PostgreSQL',   category: 'Database',     icon: 'postgresql',  color: '#4169E1' },
  { name: 'MySQL',        category: 'Database',     icon: 'mysql',       color: '#4479A1' },
  { name: 'MongoDB',      category: 'Database',     icon: 'mongodb',     color: '#47A248' },
  { name: 'SQLite',       category: 'Database',     icon: 'sqlite',      color: '#003B57' },
  { name: 'Supabase',     category: 'Database',     icon: 'supabase',    color: '#3ECF8E' },

  { name: 'Multimodal ML',category: 'AI / ML',      fallback: 'ML',      color: '#E4A33B' },
  { name: 'PyTorch',      category: 'AI / ML',      icon: 'pytorch',     color: '#EE4C2C' },
  { name: 'TensorFlow',   category: 'AI / ML',      icon: 'tensorflow',  color: '#FF6F00' },
  { name: 'Transformers', category: 'AI / ML',      icon: 'huggingface', color: '#FFD21E' },
  { name: 'Scikit-learn', category: 'AI / ML',      icon: 'scikitlearn', color: '#F7931E' },
  { name: 'OpenCV',       category: 'AI / ML',      icon: 'opencv',      color: '#5C3EE8' },
  { name: 'DeepFace',     category: 'AI / ML',      fallback: 'DF',      color: '#C79FEF' },
  { name: 'librosa',      category: 'AI / ML',      fallback: 'LR',      color: '#8EA1D6' },

  { name: 'Git',          category: 'Tooling',      icon: 'git',         color: '#F05032' },
  { name: 'GitHub',       category: 'Tooling',      icon: 'github',      color: '#8f8f8f', white: true },
  { name: 'Docker',       category: 'Tooling',      icon: 'docker',      color: '#2496ED' },
  { name: 'VS Code',      category: 'Tooling',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
  { name: 'Cursor',       category: 'Tooling',      fallback: 'CUR',     color: '#B7B7FF' },
  { name: 'Postman',      category: 'Tooling',      icon: 'postman',     color: '#FF6C37' },
  { name: 'Vercel',       category: 'Tooling',      icon: 'vercel',      color: '#8f8f8f', white: true },
];

// Controls category order + which ones render
const CATEGORY_ORDER = ['Frontend', 'Backend', 'Database', 'AI / ML', 'Tooling', 'Fundamentals'];

function SkillIcon({ s }) {
  const [failed, setFailed] = useState(false);
  const showFallback = s.fallback || failed;

  return (
    <span
      className="skill-icon"
      style={{ '--icon-color': s.color }}
    >
      {showFallback ? (
        <span className="icon-fallback">
          {s.fallback || s.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()}
        </span>
      ) : (
        <img
          src={s.src || `https://cdn.simpleicons.org/${s.icon}${s.white ? '/ffffff' : ''}`}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="stack">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">stack</span>
          <h2>What I build with:</h2>
          <p>Backend is home. Everything else is what I've picked up to ship the whole product.</p>
        </div>

        <div className="skills-groups">
          {CATEGORY_ORDER.map(cat => {
            const items = SKILLS.filter(s => s.category === cat);
            if (!items.length) return null;
            return (
              <div className="skills-group" key={cat}>
                <h3 className="skills-group-title">{cat}</h3>
                <div className="skills-icons">
                  {items.map(s => (
                    <div className="skill-chip" key={s.name}>
                      <SkillIcon s={s} />
                      <span className="skill-chip-label">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}