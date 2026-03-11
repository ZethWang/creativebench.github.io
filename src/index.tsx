import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

type Author = {
  name: string;
  superscript: string;
};

type Highlight = {
  title: string;
  body: string;
};

type FigureCard = {
  title: string;
  description: string;
  imagePath: string;
  alt: string;
};

type ResourceLink = {
  href: string;
  label: string;
  icon?: string;
};

type Contact = {
  address: string;
};

const authorRows: Author[][] = [
  [
    { name: "Zi-Han Wang", superscript: "2,6,*" },
    { name: "Lam Nguyen", superscript: "2,*" },
    { name: "Zhengyang Zhao", superscript: "3" },
  ],
  [
    { name: "Mengyue Yang", superscript: "4" },
    { name: "Chengwei Qin", superscript: "5" },
    { name: "Yujiu Yang", superscript: "2" },
    { name: "Linyi Yang", superscript: `1,\u2020` },
  ],
];

const affiliations = [
  ["1", "Southern University of Science and Technology"],
  ["2", "Tsinghua University"],
  ["3", "Peking University"],
  ["4", "University of Bristol"],
  ["5", "HKUST (Guangzhou)"],
  ["6", "Xi'an Jiaotong University"],
];

const highlights: Highlight[] = [
  {
    title: "Why Code",
    body:
      "Code gives an execution-grounded way to distinguish genuine creativity from hallucination.",
  },
  {
    title: "Two Tracks",
    body:
      "CreativeBench measures both exploratory creativity and combinatorial creativity with separate benchmark subsets.",
  },
  {
    title: "Unified Metric",
    body:
      "Creativity Score is defined as Quality x Novelty, combining correctness with meaningful structural divergence.",
  },
];

const findings = [
  "Scaling especially benefits combinatorial creativity because larger models have more representational budget for compression, letting them bind more distant concepts into coherent combinations.",
  "As model size grows, creativity rises mainly because functional correctness improves rather than because outputs become more divergent.",
  "Reasoning helps exploration under constraints much more than cross-domain combination.",
];

const contactEmails: Contact[] = [
  { address: "zihanwang25@stu.xjtu.edu.cn" },
  { address: "yangly6@sustech.edu.cn" },
];

const heroImage = "/images/creativebench/image.png";

const heroLinks: ResourceLink[] = [
  { href: "https://arxiv.org/", icon: "fas fa-file-pdf", label: "Paper" },
  { href: "https://github.com/ZethWang/CreativeBench", icon: "fab fa-github", label: "Code" },
  { href: "https://huggingface.co/datasets", icon: "fas fa-database", label: "Dataset" },
];

const footerLinks: ResourceLink[] = [
  { href: "https://arxiv.org/", label: "Paper" },
  { href: "https://github.com/ZethWang/CreativeBench", label: "Code" },
  { href: "https://huggingface.co/datasets", label: "Dataset" },
  { href: "https://github.com/ZethWang/CreativeBench/blob/main/LICENSE", label: "MIT License" },
];

const creativityModeFigure: FigureCard = {
  title: "Two Modes of Creativity",
  description:
    "Following Boden's framework, CreativeBench focuses on combinatorial creativity, which fuses familiar concepts in unfamiliar ways, and exploratory creativity, which searches for valid alternatives under hard constraints.",
  imagePath: "/images/creativebench/creativity_modes.png",
  alt: "Diagram illustrating combinatorial creativity and exploratory creativity",
};

const benchmarkFigures: FigureCard[] = [
  {
    title: "Benchmark Comparison",
    description:
      "Compared with prior code benchmarks, CreativeBench explicitly targets creativity, covers both combo and explore tracks, and supports automated construction at larger scale.",
    imagePath: "/images/creativebench/benchmark_comparison.png",
    alt: "Table comparing CreativeBench with prior benchmarks",
  },
  {
    title: "Framework Overview",
    description:
      "CreativeBench is built with a reverse-engineering and self-play pipeline, evaluated with a unified Creativity Score, and paired with EvoRePE for creativity enhancement.",
    imagePath: "/images/creativebench/framework_overview.png",
    alt: "Overview figure of CreativeBench construction, evaluation, and EvoRePE",
  },
];

const resultFigures: FigureCard[] = [
  {
    title: "Foundation Model Results",
    description:
      "Even strong frontier models remain below 60% Pass@1 on both subsets, showing that CreativeBench stays challenging while revealing a clear gap between combo and explore performance.",
    imagePath: "/images/creativebench/foundation_results.png",
    alt: "Bar charts showing foundation model performance on CreativeBench",
  },
  {
    title: "EvoRePE Results",
    description:
      "EvoRePE is a training-free steering method that consistently improves creativity on top of vanilla prompting and evolutionary baselines, showing that some benefits of evolution can be internalized in representation space.",
    imagePath: "/images/creativebench/evorepe_results.png",
    alt: "Table showing EvoRePE results on CreativeBench",
  },
];

const analysisFigures: FigureCard[] = [
  {
    title: "Convergence-by-Scaling",
    description:
      "As model size grows, Pass@1 improves, but novelty declines or plateaus. Creativity gains therefore come mainly from correctness rather than stronger divergence.",
    imagePath: "/images/creativebench/scaling_analysis.png",
    alt: "Plots showing scaling analysis on CreativeBench",
  },
  {
    title: "Reasoning Helps Exploration",
    description:
      "Reasoning mode brings clear gains on exploratory creativity, but contributes much less to combinatorial creativity, suggesting different mechanisms behind the two tracks.",
    imagePath: "/images/creativebench/reasoning_analysis.png",
    alt: "Plots showing the effect of reasoning mode on CreativeBench",
  },
];

function MetaButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="external-link button is-normal is-rounded is-dark"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <span className="icon">
        <i className={icon}></i>
      </span>
      <span>{label}</span>
    </a>
  );
}

function FigurePanel({ figure }: { figure: FigureCard }) {
  return (
    <div className="box figure-card">
      <h3 className="title is-5">{figure.title}</h3>
      <p className="figure-description">{figure.description}</p>
      <img className="figure-image" src={figure.imagePath} alt={figure.alt} />
    </div>
  );
}

function CreativeBenchHomepage() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="hero-panel">
              <div className="columns is-centered">
                <div className="column has-text-centered">
                  <div className="hero-mark">
                    <img
                      className="hero-mark-image"
                      src={heroImage}
                      alt="CreativeBench illustration showing exploratory and combinatorial creativity"
                    />
                  </div>
                  <h1 className="title is-1 publication-title">
                    CreativeBench: Benchmarking and Enhancing Machine Creativity via Self-Evolving Challenges
                  </h1>

                  {authorRows.map((row, rowIndex) => (
                    <div className="publication-authors author-row author-name-row" key={rowIndex}>
                      {row.map((author, authorIndex) => (
                        <span className="author-block" key={author.name}>
                          {author.name}
                          <sup>{author.superscript}</sup>
                          {authorIndex < row.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  ))}

                  <div className="publication-authors author-row affiliation-row">
                    {affiliations.slice(0, 3).map(([id, label]) => (
                      <span className="author-block" key={id}>
                        <sup>{id}</sup>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="publication-authors author-row affiliation-row">
                    {affiliations.slice(3).map(([id, label]) => (
                      <span className="author-block" key={id}>
                        <sup>{id}</sup>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="publication-authors author-row contact-row">
                    {contactEmails.map((contact, index) => (
                      <React.Fragment key={contact.address}>
                        <a className="contact-email" href={`mailto:${contact.address}`}>
                          {contact.address}
                        </a>
                        {index < contactEmails.length - 1 ? <span className="contact-divider">/</span> : null}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="publication-authors author-row meta-note">
                    <span className="author-block">
                      <sup>*</sup>Equal contribution.
                    </span>
                  </div>

                  <div className="publication-authors author-row meta-note">
                    <span className="author-block">
                      <sup>{`\u2020`}</sup>Corresponding author.
                    </span>
                  </div>

                  <div className="column has-text-centered">
                    <div className="publication-links">
                      {heroLinks.map((link) => (
                        <span className="link-block" key={link.label}>
                          <MetaButton href={link.href} icon={link.icon ?? ""} label={link.label} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns is-centered">
                <div className="column is-four-fifths">
                  <div className="content has-text-justified summary-copy">
                    <p>
                      CreativeBench is designed to measure machine creativity in evolutionary code generation systems.
                      Instead of treating creativity as a vague subjective concept, we ground evaluation in executable
                      code and self-evolving challenges that require both correctness and novelty.
                    </p>
                    <p>
                      The benchmark follows Boden&apos;s cognitive framework and studies two complementary capabilities:
                      recombining ideas across domains and exploring new solutions under structured constraints. This
                      leads to the two benchmark subsets, CreativeBench-Combo and CreativeBench-Explore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="columns is-centered is-multiline">
                {highlights.map((item) => (
                  <div className="column is-4" key={item.title}>
                    <div className="box summary-card">
                      <h2 className="title is-5">{item.title}</h2>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <h2 className="title is-3 has-text-centered section-title">Creativity Modes</h2>
              <div className="content has-text-centered section-intro">
                <p>CreativeBench separates creative problem solving into two complementary modes.</p>
              </div>
              <div className="box figure-card">
                <h3 className="title is-5">{creativityModeFigure.title}</h3>
                <p className="figure-description">{creativityModeFigure.description}</p>
                <img
                  className="figure-image"
                  src={creativityModeFigure.imagePath}
                  alt={creativityModeFigure.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container is-max-widescreen">
          {benchmarkFigures.map((figure) => (
            <div className="columns is-centered" key={figure.title}>
              <div className="column is-11-desktop is-full">
                <FigurePanel figure={figure} />
              </div>
            </div>
          ))}

          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <div className="box findings-card">
                <p className="benchmark-note">
                  Human verification reports 89.1% instance validity, and automated creativity rankings show strong
                  agreement with expert rankings (Spearman&apos;s rho = 0.78).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <h2 className="title is-3 has-text-centered section-title">Results</h2>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <FigurePanel figure={resultFigures[0]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container is-max-widescreen">
          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <h2 className="title is-3 has-text-centered section-title">Analysis</h2>
              <div className="box findings-card">
                <ul className="findings-list">
                  {findings.map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {analysisFigures.map((figure) => (
            <div className="columns is-centered" key={figure.title}>
              <div className="column is-11-desktop is-full">
                <FigurePanel figure={figure} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-centered">
            <div className="column is-10-desktop is-full">
              <div className="box method-card">
                <h2 className="title is-3">EvoRePE</h2>
                <div className="content has-text-justified">
                  <p>
                    Beyond benchmarking, we propose EvoRePE (Evolutionary Representation Engineering), a plug-and-play
                    inference-time steering method that extracts a creativity vector from evolutionary trajectories.
                  </p>
                  <p>
                    EvoRePE improves creativity in a way that is largely orthogonal to the underlying evolutionary
                    strategy, suggesting that part of evolutionary optimization can be internalized as latent-space
                    steering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-11-desktop is-full">
              <FigurePanel figure={resultFigures[1]} />
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-10-desktop is-full">
              <div className="box footer-card">
                <h2 className="title is-4">Contact</h2>
                <p className="footer-copy">
                  <a
                    className="footer-inline-link"
                    href="https://github.com/ZethWang/CreativeBench/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open an issue
                  </a>{" "}
                  for questions or suggestions, or contact us at{" "}
                  {contactEmails.map((contact, index) => (
                    <React.Fragment key={contact.address}>
                      <a className="contact-email" href={`mailto:${contact.address}`}>
                        {contact.address}
                      </a>
                      {index < contactEmails.length - 1 ? <span className="contact-divider">/</span> : null}
                    </React.Fragment>
                  ))}
                  .
                </p>

                <div className="footer-links">
                  {footerLinks.map((link) => (
                    <a
                      className="footer-link"
                      href={link.href}
                      key={link.label}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <p className="footer-meta">This website template is based on the LiveCodeBench project page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found.");
}

createRoot(container).render(
  <React.StrictMode>
    <CreativeBenchHomepage />
  </React.StrictMode>
);
