import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    this.props.history.push('/create');
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}
