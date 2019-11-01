// import React from 'react';
// import './DottedBox.css';
import ReactDOM from 'react-dom';
import React, { Component } from "react";
// import styled from "styled-components";
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};
const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);



// const DashedBox = () => (
//   <div className={divStyle}>
//     <p className={pStyle}>Get started with CSS Modules style</p>
//   </div>
// );



// const Wrapper = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   background-color: aqua;`;
// class HelloWorld extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <p>Hello World</p>
//       </Wrapper>
//     );
//   }
// }

ReactDOM.render( <Box />, document.getElementById("root"));