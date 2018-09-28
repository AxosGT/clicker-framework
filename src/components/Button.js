import React, {Component} from 'react';

class Button extends Component{
  render(){
    return(
      <button
        type="button"
        onClick ={this.props.onClick}>
        Click Here
      </button>
    )
  }
}

export default Button;
