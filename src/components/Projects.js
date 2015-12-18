import React, { Component } from "react";

export default class Projects extends Component {

  _renderProjects() {
    const { projects = [] } = this.props;

    return projects.map((project, i) => (
      <div className="resume-item" key={i}>
        <h3 className="resume-item-title"><a href={project.link}>{project.title}</a></h3>
        <p className="resume-item-copy">{project.description}</p>
      </div>
    ));
  }

  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Projects</h2>
        </header>

        {this._renderProjects()}
      </section>
    )
  }
}
