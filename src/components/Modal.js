import React, { useState, useEffect } from "react"
import RepoInfo from './RepoInfo'

export default function Modal({ show, closeModal, repo, opts }) {
  useEffect(() => {
    const handleModalClick = e => {
      const parent = document.querySelectorAll(".modal")[0]

      if (show && parent && !parent.contains(e.target)) closeModal()
    }

    window.addEventListener("click", handleModalClick)

    return () => window.removeEventListener("click", handleModalClick)
  }, [show])

  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-close" title="Close Modal" onClick={() => closeModal()}>
        <div>
          <div></div>
        </div>
      </div>
      {repo ? (
        <RepoInfo repo={repo} opts={opts} />
      ) : null}
    </div>
  )
}
