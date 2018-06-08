import React from "react";
import { withProps, compose, flattenProp } from "recompose";
import './index.css';

/*
TITLE:
Lock Props using Recompose

DESCRIPTION:
Learn how to use the ‘withProps’ higher order component to pre-fill a prop,
unable to be overridden.
*/
const { connect } = ReactRedux();

const mapStateToProps = state => ({ user: state.user });

const enhance = compose(connect(mapStateToProps), flattenProp("user"));

const User = enhance(({ name, status }) => (
  <div className="User">
    {" "}
    {name} - {status}{" "}
  </div>
));

const App = () => (
  <div className="App">
    <User />
  </div>
);
export default App;

// Mock Implemenation of ReactRedux connect
function ReactRedux() {
  const state = {
    user: { name: "Tim", status: "active" }
  };

  return {
    connect: map => withProps(map(state))
  };
}
