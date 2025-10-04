import { icLocation, icLinkedIn, icGitHub, icEmail } from "../assets";

export default function ContactList() {
  return (
    <ul>
        <li>
            <img src={icLocation} alt="Location" className="icon__Location" />
            <span>Los Angeles, CA</span>
        </li>
        <li>
            <img src={icLinkedIn} alt="LinkedIn" className="icon__LinkedIn" />
            <a
                href="https://www.linkedin.com/in/pkyoo"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
        </li>
        <li>
            <img src={icGitHub} alt="GitHub" className="icon__GitHub"/>
            <a
                href="https://github.com/PKYOO-116"
                target="_blank"
                rel="noreferrer"
            >
                Github
            </a>
        </li>
        <li>
            <img src={icEmail} alt="Email" className="icon__email" />
            <a href="mailto:pkyoo116@gmail.com">pkyoo116@gmail.com</a>
        </li>
    </ul> 
  );
}