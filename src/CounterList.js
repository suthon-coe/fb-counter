import React, { Component } from 'react';
import db from './firestore'
import _ from 'lodash'
import {
  Link
} from 'react-router-dom'

class CounterList extends Component {
  constructor(props){
    super(props)
    this.state = {counters: []}
  }
  componentDidMount(){
    let self = this;
    db.collection('counter').get().then( snapshot => {
      let counters = _.map(snapshot.docs, doc => ({id: doc.id, ...doc.data()}))
      self.setState({counters})
    })
  }

  render() {
    return (
      <div>
        {
          _.map(this.state.counters, counter => {
            return (
              <div key={counter.id}><Link to={`/counter/${counter.id}`}>{counter.name}</Link></div>
            )
          })
        }
      </div>
    );
  }
}

export default CounterList;
