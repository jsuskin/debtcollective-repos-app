import React, { useState, useEffect } from "react"

export default function RepoInfo({ repo, opts }) {
  const [contributors, setContributors] = useState([])
  const [comments, setComments] = useState([])
  const [stargazers, setStargazers] = useState([])

  const fetchData = (data, func) => {
    fetch(data, opts)
      .then(res => res.json())
      .then(data => func(data))
      .catch(console.error)
  }

  useEffect(() => {
    if (repo) {
      fetchData(repo.contributors_url, setContributors)
      fetchData(repo.comments_url.split("{")[0], setComments)
      fetchData(repo.stargazers_url, setStargazers)
    }
  }, [repo])

  return (
    <div className="repo-info">
      <h1 className="repo-name">{repo.name}</h1>
      <span className="repo-url">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.html_url}
        </a>
      </span>
      <br />
      {repo.description ? (
        <span>
          <span className="section-heading">Description</span>:&nbsp;
          {repo.description}
        </span>
      ) : null}
      <br />
      <span>
        <span className="section-heading">Created</span>:&nbsp;
        {new Date(Date.parse(repo.created_at)).toUTCString()}
      </span>
      <br />
      {contributors.length ? (
        <span>
          <span className="section-heading">Contributors</span>:&nbsp;
          {contributors.map((user, idx, self) => {
            return (
              <span key={idx}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  {user.login}
                </a>
                {idx === self.length - 1 ? "" : ", "}
              </span>
            )
          })}
        </span>
      ) : null}
      <br />
      <span>
        <span className="section-heading">Stargazers Count:</span>&nbsp;
        {repo.stargazers_count}
      </span>
      <br />
      {repo.stargazers_count > 0 ? (
        <>
          <span>
            <span className="section-heading">Stargazers:</span>&nbsp;
            {stargazers.map((user, idx, self) => {
              return (
                <span key={idx}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    {user.login}
                  </a>
                  {idx === self.length - 1 ? "" : ", "}
                </span>
              )
            })}
          </span>
          <br />
        </>
      ) : null}
      {comments.length ? (
        <div className="repo-comments-container">
          <span className="section-heading">Comments:</span>
          <ul className="repo-comments">
            {comments.map((comment, idx) => {
              return (
                <li key={idx}>
                  <span className="comment-number">[{idx + 1}]</span>&nbsp;
                  <span className="comment-date">
                    ({new Date(Date.parse(comment.created_at)).toUTCString()})
                  </span>
                  &nbsp;
                  {comment.body}
                  <br />
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
