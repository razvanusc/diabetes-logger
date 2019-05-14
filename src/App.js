import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EditEntry from './components/entries/EditEntry/EditEntry';
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/SignUp';
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
          <Route path='/entry/:id' component={EditEntry} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/add' component={CreateEntry} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
