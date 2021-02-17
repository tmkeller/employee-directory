import React from "react";
import "./style.css";
import API from "../../utils/API";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
