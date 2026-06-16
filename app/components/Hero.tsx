export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">DESIGNER</div>

      <div className="hero-arch-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.webp"
          alt="Egi Ghaniyyu"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "top center",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
          }}
        />
      </div>

      <div className="hero-bottom-gradient" />

      <div className="hero-pill hero-pill-1">Product Designer</div>
      <div className="hero-pill hero-pill-2">UI / UX Designer</div>

      <div className="hero-stat-card hero-stat-card-1">
        <div className="hero-stat-row">
          <div>
            <div className="hero-stat-label">Years Crafting</div>
            <div className="hero-stat-label">Digital Products</div>
          </div>
          <div className="hero-stat-num">5+</div>
        </div>
      </div>

      <div className="hero-stat-card hero-stat-card-2">
        <div className="hero-stat-row">
          <div>
            <div style={{ fontSize: 13, color: "var(--gray)" }}>
              Successful Client
            </div>
            <div style={{ fontSize: 13, color: "var(--gray)" }}>
              Partnerships
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              fontWeight: 700,
              color: "var(--dark)",
            }}>
            20+
          </div>
        </div>
      </div>

      <div className="hero-bottom-left">
        <div className="hero-name-label">Hey, I&apos;m Egi Ghaniyyu</div>
        <h1 className="hero-title">
          AI-Powered Product
          <br />
          &amp; UI / UX Designer
        </h1>
      </div>
    </section>
  );
}
