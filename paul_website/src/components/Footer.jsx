import React from "react";

import icLinkedIn from "../logos/LI-In-Bug.png";
import icGitHub   from "../logos/github-mark-white.png";
import icEmail    from "../logos/email.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <div className="footer__cols">
          {/* Left: contacts */}
          <ul className="footer__contacts">
            <li>
              <span className="footer__label">
                <img src={icLinkedIn} alt="LinkedIn" />
                LinkedIn
              </span>
              <a
                className="footer__value"
                href="https://www.linkedin.com/in/pkyoo"
                target="_blank" rel="noreferrer"
              >
                https://www.linkedin.com/in/pkyoo
              </a>
            </li>
            <li>
              <span className="footer__label">
                <img src={icGitHub} alt="GitHub" />
                GitHub
              </span>
              <a
                className="footer__value"
                href="https://github.com/PKYOO-116"
                target="_blank" rel="noreferrer"
              >
                https://github.com/PKYOO-116
              </a>
            </li>
            <li>
              <span className="footer__label">
                <span className="footer__iconbox">
                  <img src={icEmail} alt="Email" />
                </span>
                Email
              </span>
              <a className="footer__value" href="mailto:pkyoo116@gmail.com">
                pkyoo116@gmail.com
              </a>
            </li>
          </ul>

          {/* Right: name */}
          <div className="footer__name">Paul Keunchan Yoo</div>
        </div>
      </div>
    </footer>
  );
}