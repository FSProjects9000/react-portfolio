import './App.css'

function DeployBadge() {
  return (
    <div className="deploy-badge" role="status" aria-label="Deployment status">
      <span className="deploy-badge__dot" aria-hidden="true" />
      <span className="deploy-badge__text">
        This website was deployed with GitHub Actions into my EC2 instance
        <span className="deploy-badge__cursor" aria-hidden="true" />
      </span>
    </div>
  )
}

function InfraGraphic() {
  // Abstract node graph evoking a small cloud/instance topology.
  // Rendered as inline SVG so it can be color-matched and mask-faded
  // precisely into the page background rather than dropped in as a photo.
  return (
    <svg
      className="infra-graphic__svg"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0" />
          <stop offset="35%" stopColor="#1B2A4A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2FB6A8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2FB6A8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="url(#lineFade)" strokeWidth="1.4" fill="none">
        <path d="M100,340 L300,220 L520,300 L760,180 L980,260 L1120,190" />
        <path d="M300,220 L300,80" />
        <path d="M520,300 L520,120" />
        <path d="M760,180 L980,60" />
        <path d="M100,340 L100,160" />
        <path d="M980,260 L1120,340" />
      </g>

      <g fill="#1B2A4A" opacity="0.85">
        <circle cx="100" cy="340" r="5" />
        <circle cx="300" cy="220" r="5" />
        <circle cx="520" cy="300" r="5" />
        <circle cx="980" cy="260" r="5" />
        <circle cx="1120" cy="190" r="5" />
        <circle cx="100" cy="160" r="3.5" />
        <circle cx="300" cy="80" r="3.5" />
        <circle cx="520" cy="120" r="3.5" />
        <circle cx="980" cy="60" r="3.5" />
        <circle cx="1120" cy="340" r="3.5" />
      </g>

      {/* EC2 node, highlighted */}
      <circle cx="760" cy="180" r="26" fill="url(#nodeGlow)" />
      <circle cx="760" cy="180" r="7" fill="#2FB6A8" />
      <text
        x="760"
        y="222"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="13"
        fill="#1B2A4A"
        opacity="0.75"
      >
        ec2-instance
      </text>
    </svg>
  )
}

export default function App() {
  return (
    <div className="page">
      <main className="hero">
        <div className="hero__portrait-wrap">
          <img
            className="hero__portrait"
            src="/filipe.png"
            alt="Portrait of Filipe Simões"
            width="168"
            height="168"
          />
        </div>

        <h1 className="hero__headline">
          Hello world!
          <span className="hero__headline-line">I am Filipe Simões</span>
        </h1>

        <DeployBadge />
      </main>

      <section className="infra-graphic" aria-hidden="true">
        <InfraGraphic />
      </section>
    </div>
  )
}
