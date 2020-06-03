import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Menu({ showMenu }) {
  const links = [
    ["Home", "/"],
    ["Repos", "/repos"],
    ["Debt Collective Homepage", "https://debtcollective.org/"],
    ["Debt Collective Github", "https://github.com/debtcollective"],
  ]
  return (
    <div className={`menu${showMenu ? " active" : ""}`}>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            {link[1].startsWith("https") ? (
              <a
                className="link"
                activeclassname="active-nav-link"
                href={link[1]}
                target="_blank"
              >
                {link[0]}
              </a>
            ) : (
              <Link
                className="link"
                activeclassname="active-nav-link"
                to={link[1]}
              >
                {link[0]}
              </Link>
            )}
          </li>
        ))}
        <li>
          <a
            className="link"
            activeclassname="active-nav-link"
            href="https://github.com/jsuskin/debtcollective-repos-app"
            title="View the code for this app on GitHub"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
