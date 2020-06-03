import React, { useState, useEffect } from "react"
import PageSelector from "../components/PageSelector"
import Repo from "../components/Repo"
import Layout from "../components/Layout"
import Modal from "../components/Modal"

const Repos = () => {
  const [repos, setRepos] = useState([])
  const [selectedRepo, setSelectedRepo] = useState(null)
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const handleClick = repo => {
    setShowModal(true)
    setSelectedRepo(repo)
    console.log(repo)
  }
  
  let url = `https://api.github.com/users/debtcollective/repos?per_page=${window.innerWidth > 759 ? 12 : window.innerWidth > 600 ? 4 : 7}&page=${page}`

  const opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.GH_ACCESS_TOKEN,
    },
  }

  useEffect(() => {
    fetch(url, opts)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(console.error)
  }, [page])

  return (
    <Layout>
      <Modal show={showModal} closeModal={() => setShowModal(false)} repo={selectedRepo} opts={opts} />
      <div className="repos-container">
        <ul className="repos">
          {repos.length
            ? repos.map((repo, idx) => {
                return (
                  <li key={idx}>
                    <Repo repo={repo} opts={opts} handleClick={handleClick} />
                  </li>
                )
              })
            : null}
        </ul>
      </div>
      <PageSelector pageNumber={page} setPageNumber={setPage} />
    </Layout>
  )
}

export default Repos
