import React from 'react';
import LinkList from './components/linklist'
import CreateLink from './components/createlink'
import Header from './components/header'
import Login from './components/login'
import Search from './components/search'
import './styles/App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import ReactNotifications from 'react-notifications-component';

function App() {
  return (
    <div className="center w85">
      <ReactNotifications />
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/new/1' />} />
          <Route exact path='/top' component={LinkList} />
          <Route exact path='/new/:page' component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
