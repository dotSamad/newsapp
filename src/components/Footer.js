import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">NEWS PAPER</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
