import React from 'react';

var NS = {};

NS.rows = function () {
  var rows = [],
    i = 0,
    align = "";
  while (i < 51) {
    if (i % 2) {
      align = "left";
    } else {
      align = "right";
    }
    rows.push(<li style={{ textAlign: align, "fontSize": i + 2 + "px" }} key={"monkey" + i}>
      <a href={"#" + i + 100}> All work and no play in the {align} party! </a>
    </li>);
    i++;
  }
  return (<lu>
    {rows}
  </lu>);
}

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello cruel World</h1>
        {NS.rows()}
      </div>);
  }
}