import React from "react";
import { mapProps, lifecycle } from "recompose";
import './index.css';

/*
TITLE:
Lock Props using Recompose

DESCRIPTION:
Learn how to use the ‘withProps’ higher order component to pre-fill a prop,
unable to be overridden.
*/

const User = ({ name, status }) =>
  <div className="User">{name}—{status}</div>;


const UserList = ({ users, status }) =>
  <div className="UserList">
    <h3>{ status } users</h3>
    { users && users.map((user) => <User {...user} />)}
  </div>

const users = [
  { name: "Tim", status: 'active' },
  { name: "Bob", status: 'pending' },
  { name: "Joe", status: 'active' },
  { name: "Jim", status: 'inactive' },
];

const filterByStatus = (status) => mapProps(
  ({ users }) => {
    return {
      status,
      users: users.filter(u => u.status === status)
    }
  }
);

const ActiveUsers = filterByStatus('active')(UserList);
const InactiveUsers = filterByStatus('inactive')(UserList);
const PendingUsers = filterByStatus('pending')(UserList);

const App = () =>
  <div className="App">
    {/*<h3>active users</h3>*/}
    {/*<UserList users={users.filter(u => u.status === 'active')} />*/}

    {/*<h3>inactive users</h3>*/}
    {/*<UserList users={users.filter(u => u.status === 'inactive')} />*/}

    {/*<h3>pending users</h3>*/}
    {/*<UserList users={users.filter(u => u.status === 'pending')} />*/}
    <ActiveUsers users={ users } />
    <InactiveUsers users={ users } />
    <PendingUsers users={ users } />
  </div>;



export default App;

