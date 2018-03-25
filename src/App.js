import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column" style={{height: '100%'}}>
        <Header/>
        <MenuBar/>
        <Recipes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
