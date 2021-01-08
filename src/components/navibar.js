import React from "react";

const Navibar = (props) => {
  return (
    <nav className="navbar  navbar-light bg-light">
      <div className="container-fluid">
        Total Item fetch : {props.totalFetchCount}  
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
