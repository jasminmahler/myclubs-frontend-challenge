import React from 'react';
import './components.css';
import logo from '../assets/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header>
          <img src={logo} className="Header-logo" alt="logo" />
        </header>
      </div>
    );
  }
}