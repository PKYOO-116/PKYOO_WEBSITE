import { NavLink } from "react-router-dom";
import { profileLogo } from "../assets";

export default function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/whoami", label: "Who Am I" },
    { to: "/daily", label: "Daily" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="nav">
      <div className="nav__wrap">
        <NavLink to="/" className="nav__logoLink">
          <img
            src={profileLogo}
            alt="Profile Logo"
            className="nav__logo"
          />
        </NavLink>

        <nav className="nav__list">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav__item${isActive ? " nav__item--active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}