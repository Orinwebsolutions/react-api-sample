import React from "react";

const Navibar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        Total Item fetch : {props.totalFetchCount}
      </div>
    </nav>
  );
};

export default Navibar;
