import React from "react";

export default class Experience {
  _renderSections() {
    var sections = []
    this.props.work.map((exp, i) => {
      sections.push(
          <div className="resume-item" key={i}>
            <h3 className="resume-item-title">{exp.company}</h3>
            <h4 className="resume-item-details">{exp.title} &bull; {exp.time}</h4>
            <p className="resume-item-copy">{exp.duties}</p>
          </div>
      );
    });
    return sections;
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
