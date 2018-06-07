import React, { Component, Fragment } from "react";
import { compose, setDisplayName, setPropTypes } from "recompose";
import PropTypes from "prop-types";
import { render } from "react-dom";
import "./index.css";
/*
TITLE: Compose Multiple Higher Order Components Together using Recompose

DESCRIPTION: Learn how to use the 'compose' function to mix together
higher-order components, even ones from other libraries like 'connect'
from redux.
*/

const { connect } = Redux();

const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  connect()
);

const User = enhance(({ name, status, dispatch }) =>
  <div className="User"
       onClick={
         () => dispatch({ type: "USER_SELECTED"})
       }
  >
    { name }: { status }
  </div>
);

console.log(User.displayName);

class App extends Component {
  render() {
    return (
      <Fragment>
        <User name="Tim" status="active" />
      </Fragment>
    );
  }
}

export default App;

// fake implementation of redux
function Redux() {
  return {
    connect: () => (BaseComponent) => (props) =>
      <BaseComponent
        {...props}
        dispatch={ ({ type }) => console.log(type + ' dispatched')}
      />
  }
}