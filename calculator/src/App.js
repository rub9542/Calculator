import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Design from './Components/Design';
import Previous from './Components/Previous';
import Sample from './Components/Sample';
import Sample1 from './Components/Sample1';
import { UserProvider } from './Components/UserContext';
import { DataProvider } from './Components/DataContext'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ErrorBoundary from './Components/ErrorBoundary';
import Prev1 from './Components/Prev1';
import Sample2 from './Components/Sample2';


class App extends Component{
  render(){
    return(
      <DataProvider>
        <div className='sector'>
          <Router>
            <Switch> 
              <Route path='/' exact component={Design}/>
              <Route path='/history' exact component={Prev1}/>
            </Switch>
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;