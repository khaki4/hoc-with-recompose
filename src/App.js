import React, { Component } from "react";
import { render } from "react-dom";
import { mapProps, lifecycle } from "recompose";
import './index.css';
/*
TITLE:
Transform Props using Recompose

DESCRIPTION:
Learn how to use the 'mapProps' higher-order component to modify an
existing component’s API (its props). 'mapProps' takes incoming props
and changes them however you’d like; for example, filtering the props
by a field.
*/

const configPromise = fetchConfiguration();

const withConfig = lifecycle({
  state: { config: {} },
  componentDidMount() {
    configPromise.then(config => this.setState({ config }));
  }
});



const User = withConfig(({ name, status, config }) => {
   return (
     <div className="User">
       { name }
       { config.showStatus && '-' + status }
       { config.canDeleteUsers && <button>x</button> }
     </div>
   );
  }
);

const App = () => (
  <div>
    <User
      name="Tim"
      status="actives"
      showStatus
      canDleteUsers
    />
  </div>
);

export default App;

const config = {
  showStatus: true,
  canDeleteUsers: true
}

function fetchConfiguration() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(config), 300);
  });
}
