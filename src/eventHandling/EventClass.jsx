import React from 'react';

class Doctor extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      onhit: true
    };

  }
  handleClick = () => {
    
    this.setState(state => 
      ({
        onhit: !state.onhit
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello Event Handling Working here!!</h1>
        <button onClick={this.handleClick}>{this.state.onhit ? "ON":"OFF"}</button>
      </div>
    );
  }
}
export default Doctor;
