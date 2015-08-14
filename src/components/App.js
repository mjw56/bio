import React, { Component } from "react";
import Header from "./Header";
import Tile from "./Tile";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Tile
          title="Education"
          body={["Rutgers University, New Brunswick, NJ", "B.S. in Computer Science"]}
        />
      </div>
    );
  }
}
