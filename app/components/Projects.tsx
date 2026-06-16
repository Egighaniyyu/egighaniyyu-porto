import { PROJECTS } from "@/app/data/projects";
import Button from "./Button";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-header reveal">
          <span
            className="section-tag"
            style={{ justifyContent: "center", marginBottom: 8 }}>
            My Portfolio
          </span>
          <h2 className="section-title">
            Projects That
            <br />
            Delivered Real Impact
          </h2>
        </div>

        <div className="projects-list">
          {PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="project-item project-featured reveal glow-hover">
              <div className="project-info">
                <div className="project-product-name">{p.name}</div>
                <div className="project-category">{p.category}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="project-metric">
                      <div className="project-metric-value">{m.value}</div>
                      <div className="project-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="project-actions">
                  <Button
                    label="View Case Study"
                    href={p.caseStudyHref}
                    variant="primary"
                    size="sm"
                  />
                  <Button
                    label="Visit Product"
                    href={p.productHref}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                  />
                </div>
              </div>

              <div className="project-img project-img-featured">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.thumb}
                  alt={`${p.name} preview`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
