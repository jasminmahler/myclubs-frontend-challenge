import React from 'react';
import './components.css';

import Header from './Header';
import Footer from './Footer';
import Activity from '../containers/Activity';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Activity />
        <Footer />
      </div>
    );
  }
}