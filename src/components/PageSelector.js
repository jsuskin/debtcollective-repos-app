import React, { useState, useEffect } from "react"

export default function PageSelector({ pageNumber, setPageNumber }) {
  const [showPageSelector, setShowPageSelector] = useState(false)
  let lastPage = window.innerWidth > 759 ? 5 : window.innerWidth > 600 ? 13 : 8
  let pages = Array.from(Array(lastPage)).map((_, idx) => idx + 1)
  
  // useEffect(() => {
  //   lastPage = window.innerWidth > 759 ? 5 : 13
  //   pages = Array.from(Array(lastPage)).map((_, idx) => idx + 1)
  // }, [])

  return (
    <div className="page-selector">
      <div
        className={`arrow arrow-left${pageNumber < 2 ? " inactive" : ""}`}
        title="Previous Page"
        onClick={() => {
          if (pageNumber > 1) setPageNumber(pageNumber - 1)
        }}
      ></div>
      <span className="current-page-number" onClick={() => setShowPageSelector(true)}>Page&nbsp;{pageNumber}</span>
      <div
        className={`arrow arrow-right${pageNumber > lastPage - 1 ? " inactive" : ""}`}
        title="Next Page"
        onClick={() => {
          if (pageNumber < lastPage) setPageNumber(pageNumber + 1)
        }}
      ></div>
      <div className={`page-number-selector${showPageSelector ? '' : ' inactive'}`}>
        <ul>
          {pages.map((num, idx) => (
            <li key={idx} className={`page-number-selection${pageNumber === num ? ' current' : ''}`}onClick={() => {
              setPageNumber(num)
              setShowPageSelector(false)
              }}>
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
