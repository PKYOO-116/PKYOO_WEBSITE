import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/whoami", label: "Who Am I" },
    { to: "/projects", label: "Projects" },
    { to: "/daily", label: "Daily" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="nav">
      <div className="nav__wrap container">
        <nav className="nav__list">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
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