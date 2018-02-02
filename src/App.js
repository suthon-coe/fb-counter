import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CounterList from './CounterList'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={CounterList}/>
        <Route path="/counter/:id" component={Counter}/>        
      </div>
    </Router>
    );
  }
}

export default App;
