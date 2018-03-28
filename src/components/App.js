import React from 'react';
import './components.css';

import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}