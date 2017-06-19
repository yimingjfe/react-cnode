import React, { Component } from 'react';
import './App.css';

// import TestFlip from './testFilp'
// import Articles from './Articles'
import AuthExample from './AuthExample'

const articles = [
  {id: 1, content: 'qqqqqqqqqqqq'},
  {id: 2, content: 'wwwwwwwww'},
  {id: 3, content: 'fsdfefesa'},
  {id: 4, content: 'qgrgdsgfr'},
]

const deleteItem = (index) => {
  let list = articles;
  list.splice(index, 1)
  // this.setState({list})
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthExample/>
      </div>
    );
  }
}

export default App;
