import React, { Component } from "react";

export default class Articles extends Component {

  _renderArticles() {
    const { articles = [] } = this.props;

    return articles.map((article, i) => (
      <div className="resume-item" key={i}>
        <h3 className="resume-item-title"><a href={article.link}>{article.title}</a></h3>
        <p className="resume-item-copy">{article.description}</p>
      </div>
    ));
  }

  render() {
    return (
      <section className="content-section">
        <header className="section-header">
          <h2>Articles</h2>
        </header>

        {this._renderArticles()}
      </section>
    )
  }
}
