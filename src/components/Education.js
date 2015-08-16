import React from "react";

export default class Education {
  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Education</h2>
        </header>
        <div className="resume-item">
          <h3 className="resume-item-title">{this.props.education.school}</h3>
          <h4 className="resume-item-details">{this.props.education.subject} &bull; {this.props.education.time}</h4>
        </div>
      </section>
    )
  }
}
