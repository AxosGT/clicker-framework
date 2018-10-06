import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import Button from './Button.js';
import AutoClicker from './AutoClicker.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();

  };
  // componentWillMount(){
  //   this.props.onPageLode();
  // }

  render() {
    //console.log(this.props.appJsonData.auto[0].frequency)
    return (
    <div>


      {this.props.appJsonData.auto.map((n,inx)=>
        <div key={inx}>
          <Button
            message={n.name}
            onClick={(e) => {
              e.preventDefault();
              this.props.onAutoAdd(n.frequency)
            }}
          />
       </div>
      )}

        {this.props.appJsonData.passive.map((n,inx)=>
          <div key={inx}>
            <Button
              message={n.name}
              onClick={(e) => {
                e.preventDefault();
                this.props.onClickCountSumAdd(n.data)
              }}
            />
          </div>
        )}

        <Button
          message={'click me'}
          onClick={(e) => {
            e.preventDefault();
            this.props.onClickCount(1)
          }}
        />

        <div>
          {this.props.clickCount}
        </div>
        <div>
          cps base:
          {this.props.clickPerSec}
        </div>
        <div>
          passive:
          {this.props.sumAdded}
        </div>
        <div>
          cps ie cps+cps*passive:
          {this.props.clickPerSec+(this.props.clickPerSec*this.props.sumAdded)}
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
