import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { education = {} } = this.props;

    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Education</h2>
        </header>
        <div className="resume-item">
          <h3 className="resume-item-title">{education.school}</h3>
          <h4 className="resume-item-details">{education.subject} &bull; {education.time}</h4>
        </div>
      </section>
    )
  }
}
