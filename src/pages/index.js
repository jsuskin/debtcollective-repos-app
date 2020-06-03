import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-text">
        <h2>Debt Collective GitHub Repositories</h2>
        <h4>2020 © Joshua Suskin</h4>
        <hr />
        <p>
          Click the "repos" link in the menu of this app to view{" "}
          <a href="https://debtcollective.org/" target="_blank">
            The Debt Collective
          </a>
          's GitHub repositories. Once, there, a series of cards which include
          the name and url of a repository will be displayed. You may click the
          url to view the repository in a new tab or just click the card to view
          additional information, including that repository's contributors, if
          available, and any comments, if available, within a modal.
        </p>
        <p>
          When available, comments will be listed numerically and will include
          the date and time that comment was made.
        </p>
        <p>
          On larger screens, twelve repositories will be listed per page, on
          medium-sized screens, such as tablets, four repositories will be
          listed per page and on mobile screens, seven repositories will be
          listed per page and the menu will be accessible via a hamburger icon
          at the top right of the screen. You can switch pages by utilizing the
          arrows at the bottom of the screen, or click the page number between
          the arrows to choose an individual page number.
        </p>
      </div>
    </Layout>
  )
}
