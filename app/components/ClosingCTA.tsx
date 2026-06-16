import Button from "./Button";

export default function ClosingCTA() {
  return (
    <section className="closing-section" id="contact">
      <div className="reveal">
        <p className="closing-eyebrow">Let&apos;s Create Together</p>
        <h2 className="closing-title">
          Ok, you&apos;ve scrolled <em>this far</em>,
          <br />
          you must be looking to do
          <br />
          something now right?
        </h2>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            label="Email Me"
            href="mailto:egighaniyyu@gmail.com"
            variant="primary"
          />
          <Button
            label="Download CV"
            href="https://docs.google.com/document/d/15mDZqVJ1gNEh_KjaWpdZXIhVH0B_JMts/edit?usp=sharing&ouid=100324465092423050866&rtpof=true&sd=true"
            variant="secondary"
            target="_blank"
          />
          <Button
            label="Connect with Me"
            href="https://www.linkedin.com/in/egighaniyyu/"
            variant="secondary"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}
