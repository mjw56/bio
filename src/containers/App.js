import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { Header, Education, Experience, Links, Projects, Skills } from '../components';
import configureStore from '../lib/configureStore';
import { fetchInfo } from '../actions/actions'

class App extends Component {
  static propTypes = {
    infoStore: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    fetchInfo
  ]

  render() {
    let { info } = this.props.infoStore;
    return (
      <div className="wrapper">
        <Header {...info} />
        <Skills {...info} />
        <Education {...info} />
        <Experience {...info} />
        <Projects {...info} />
      </div>
    );
  }
}
export default connect((state) => {
  return {
    infoStore: state.info,
    fetchInfo: fetchInfo
  }
})(App)
