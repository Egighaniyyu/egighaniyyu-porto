const ITEMS = [
  "AI-Powered Design",
  "UI/UX Design",
  "Product Design",
  "Web Experience",
  "AI Interaction Design",
  "Design Systems",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot" style={{ marginLeft: 16 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
