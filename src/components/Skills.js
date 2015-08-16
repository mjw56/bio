import React from "react";

export default class Skills {
  _renderSections() {
    var sections = []
    this.props.skills.map((skill, i) => {
      sections.push(
        <div className="resume-item" key={i}>
          <h4 className="resume-item-details">{skill}</h4>
        </div>
      );
    });
    return sections;
  }

  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Skills</h2>
        </header>
        {this._renderSections()}
      </section>
    )
  }
}
