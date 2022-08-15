import React from 'react'

function Navbars() {
  return (
    <div>
       <nav className="navbar navheadi navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="index.html">
<img src="images/logo1.svg" width="300" height="40" alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="individual.html">Individual<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="team.html">Teams</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="enterprise.html">Enterprise</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbars;