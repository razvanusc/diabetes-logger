import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EntryDetails from './components/entries/EntryDetails/EntryDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateEntry from './components/entries/CreateEntry/CreateEntry';
import Landing from './components/landing/Landing';
 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch> 
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Landing} />
          <Route path='/entry/:id' component={EntryDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/add' component={CreateEntry} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
