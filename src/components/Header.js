import React, { Component } from "react";
import { Links } from './index';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <img src="content/images/avatar.jpg" alt="my photo" className="avatar" />

        <h1 className="header-name">{this.props.name}</h1>

        <div className="title-bar">
          <h2 className="header-title">Software Engineer</h2>
          <Links {...this.props} />
        </div>

        <div className="executive-summary">
          <p></p>
        </div>

        <a href="mailto:mwilcox56@gmail.com" className="contact-button">Contact me</a>
      </header>
    )
  }
}
