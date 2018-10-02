import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import Button from './Button.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();
  };
  // componentDidMount(){
  //   this.props.onPageLode();
  // }

  render() {
    console.log(this.props.appJsonData)
    return (

      <div className="App">

        <Button
          onClick={(e) => {
            e.preventDefault();
            this.props.onClickCount(1)
          }}
        />

        <div>
          {this.props.clickCount}
        </div>

      </div>



      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
