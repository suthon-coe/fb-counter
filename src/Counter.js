import React, { Component } from 'react';
import db from './firestore'
class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        let self = this;
        db.collection('counter').doc(this.props.match.params.id).onSnapshot(snapshot => {
          self.setState(snapshot.data());
        })
      }
    inc = () => {
        let counter = {name: this.state.name, value: this.state.value + 1}
        db.collection('counter').doc(this.props.match.params.id).set(counter);        
    }
    render(){
        return (
            <div>
                Counter with id {this.props.match.params.id}
                <br/>
                {this.state.name} = {this.state.value}
                <br/>
                <button onClick={this.inc}>Add</button>
            </div>
        )
    }
}
export default Counter;