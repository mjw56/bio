import React from "react";

export default class Projects {

  _renderProjects() {
    let projects = [];

    this.props.projects.map((project, i) => {
      projects.push(
        <div className="resume-item" key={i}>
          <h3 className="resume-item-title"><a href={project.link}>{project.title}</a></h3>
          <p className="resume-item-copy">{project.description}</p>
        </div>
      )
    })
    return projects;
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
