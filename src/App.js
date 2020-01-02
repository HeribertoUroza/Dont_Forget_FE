import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing/Landing';

//CSS
import './app.css'

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={ Landing } />
        </Switch>
      </HashRouter>
    </>
    
  );
}

export default App;
