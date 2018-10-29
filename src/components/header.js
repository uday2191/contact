import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul>
        <li><Link to="/list" className="active"> Home</Link></li>
        <li><Link to="/create" className=""> Create Contact</Link></li>
      </ul>
    );
  }
}
