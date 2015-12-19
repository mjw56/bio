import React, { Component } from "react";

export default class Skills extends Component {
  _renderSections() {
    const { skills = [] } = this.props;

    return skills.map((skill, i) => (
      <div className="resume-item" key={i}>
        <h4 className="resume-item-details">
          {(i < skills.length - 1) ? `${skill}, ` : `${skill}`}
        </h4>
      </div>
    ));
  }

  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Skills</h2>
        </header>
        <div className="resume-items">
          <h2>[ </h2>{this._renderSections()}<h2>]</h2>
        </div>
      </section>
    )
  }
}
