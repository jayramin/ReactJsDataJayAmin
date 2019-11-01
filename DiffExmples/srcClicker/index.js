import ReactDOM from 'react-dom';
import React, { Component } from "react";
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render( <Welcome/>, document.getElementById("root"));
ReactDOM.render( <Welcome name='test'/>, document.getElementById("root"));