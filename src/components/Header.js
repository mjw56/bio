import React, { Component } from "react";
import { Links } from './index';

export default class Header {
  render() {
    return (
      <header className="page-header">
        <img src="images/avatar.jpg" alt="my photo" className="avatar" />

        <h1 className="header-name">{this.props.name}</h1>

        <div className="title-bar">
          <h2 className="header-title">Nuclear Safety Inspector</h2>
          <Links {...this.props} />
        </div>

        <div className="executive-summary">
          <p>This is the executive summary. You should write a few brief, concise, and meaningful sentences about yourself from a professional context, and your immediate career goals. Make the length appropriate for your needs, but K.I.S.S.</p>
        </div>

        <a href="mailto:mwilcox56@gmail.com" className="contact-button">Contact me</a>
      </header>
    )
  }
}
