import React, { Component } from "react";

export default class Skills extends Component {
  _renderSections() {
    const sections = []
    const { skills = [] } = this.props;

    skills.map((skill, i) => {
      sections.push(
        <div className="resume-item" key={i}>
          <h4 className="resume-item-details">{skill},</h4>
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
        <div className="resume-items">
          [ {this._renderSections()} ]
        </div>
      </section>
    )
  }
}
