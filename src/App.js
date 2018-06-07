import React, { Component, Fragment } from 'react';
import "./index.css";

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />
    }
  }

const User = ({ name }) =>
  <div className="User">{ name }</div>

const User2 = neverRender(User);

class App extends Component {
  render() {
    return (
      <Fragment>
        <User name="Tim" />
        <User2 name="Hello" />
      </Fragment>
    );
  }
}

export default App;
