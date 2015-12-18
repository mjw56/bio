import React, { Component } from "react";

export default class Experience extends Component {
  _renderSections() {
    const { work = [] } = this.props;

    return work.map((exp, i) => (
        <div className="resume-item" key={i}>
          <h3 className="resume-item-title">{exp.company}</h3>
          <h4 className="resume-item-details">{exp.title} &bull; {exp.time}</h4>
          <p className="resume-item-copy">{exp.duties}</p>
        </div>
    ));
  }

  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Experience</h2>
        </header>
        {this._renderSections()}
      </section>
    )
  }
}
