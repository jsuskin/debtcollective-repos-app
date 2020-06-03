import React, { Component } from "react"

export default class PageSelector extends Component {
  state = {
    showPageSelector: false,
    lastPage: 0,
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      lastPage: window.innerWidth > 759 ? 5 : window.innerWidth > 600 ? 13 : 8,
    })
  }

  render() {
    const { pageNumber, setPageNumber } = this.props;
    const pages = Array.from(Array(this.state.lastPage)).map(
      (_, idx) => idx + 1
    )

    return (
      <div className="page-selector">
        <div
          className={`arrow arrow-left${pageNumber < 2 ? " inactive" : ""}`}
          title="Previous Page"
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1)
          }}
        ></div>
        <span
          className="current-page-number"
          onClick={() => {
            this.setState({ showPageSelector: true })
          }}
        >
          Page&nbsp;{pageNumber}
        </span>
        <div
          className={`arrow arrow-right${
            pageNumber > this.state.lastPage - 1 ? " inactive" : ""
          }`}
          title="Next Page"
          onClick={() => {
            if (pageNumber < this.state.lastPage) setPageNumber(pageNumber + 1)
          }}
        ></div>
        <div
          className={`page-number-selector${
            !!this.state.showPageSelector ? "" : " inactive"
          }`}
        >
          <ul>
            {pages.map((num, idx) => (
              <li
                key={idx}
                className={`page-number-selection${
                  pageNumber === num ? " current" : ""
                }`}
                onClick={() => {
                  setPageNumber(num)
                  this.setState({ showPageSelector: false })
                }}
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
