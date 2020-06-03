import React, { useState, useEffect } from "react"

export default function Repo({ repo, opts, handleClick }) {
  return (
    <div className="repo-card" onClick={() => handleClick(repo)}>
      <span className="repo-name">{repo.name}</span>
      <span className="repo-url">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.html_url}
        </a>
      </span>
    </div>
  )
}
