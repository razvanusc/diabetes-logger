import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import EntryList from './components/entries/EntryList';
import EntryDetails from './components/entries/EntryDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateEntry from './components/entries/CreateEntry';
 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={EntryList} />
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
