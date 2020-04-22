import React from 'react';
import LinkList from './components/linklist'
import CreateLink from './components/createlink'
import Header from './components/header'
import Login from './components/login'
import './styles/App.css'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
