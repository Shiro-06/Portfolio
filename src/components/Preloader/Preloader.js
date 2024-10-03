import React from "react";
import "./Preloader.scss";

function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;
