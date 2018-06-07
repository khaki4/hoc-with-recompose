import React, { Component, Fragment } from 'react';
import "./index.css";

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />

const User = ({ name }) =>
  <div className="User">{ name }</div>

const alwaysBob = overrideProps({ name: 'Bob' });
const User2 = alwaysBob(User);

class App extends Component {
  render() {
    return (
      <Fragment>
        <User name="Tim" />
        <User2 name="Jiwon" />
      </Fragment>
    );
  }
}

export default App;