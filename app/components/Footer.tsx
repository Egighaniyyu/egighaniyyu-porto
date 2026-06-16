export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <div className="footer-logo-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/egi-photo-circle.png" alt="Egi Ghaniyyu" />
        </div>
        Egi Ghaniyyu
      </div>
      <ul className="footer-nav">
        <li>
          <a
            href="https://dribbble.com/egighaniyyu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/egighaniyyu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@egighaniyyu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nagi.noms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}
