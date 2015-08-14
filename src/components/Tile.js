import React, { Component } from "react";

export default class Education extends Component {

  _renderBody() {
    let elems = [];

    this.props.body.map((elem, i) => {
      elems.push(<span key={i}>{elem}</span>, <br />)
    });
    return elems;
  }

  render() {
    return (
      <div className="block">
        <div className="title">{this.props.title}</div>
        <span className="body">
          {this._renderBody()}
        </span>
      </div>
    )
  }
}
