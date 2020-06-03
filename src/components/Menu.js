import React from "react"
import { Link } from "gatsby"

export default function Menu({ showMenu }) {
  const links = [
    ["Home", "/"],
    ["Repos", "/repos"],
    ["Debt Collective Homepage", "https://debtcollective.org/"],
    ["Debt Collective Github", "https://github.com/debtcollective"],
  ]
  return (
    <div className={`menu${showMenu ? ' active': ''}`}>
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
      </ul>
    </div>
  )
}
