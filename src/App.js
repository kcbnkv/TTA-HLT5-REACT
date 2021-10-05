import React from 'react';
import './App.css';
import FormSignup from './pages/signup';
import FormLogin from './pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={FormSignup} exact />
        <Route path='/login' component={FormLogin} exact />
      </Switch>
    </Router>
  );
}

export default App;
