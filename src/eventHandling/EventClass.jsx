import React from 'react';

class Doctor extends React.Component {
  handleClick = () => {
    console.log('Button Clicked :-', this);
  };

  render() {
    return (
      <div>
        <h1>Hello Event Handling Working here!!</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
export default Doctor;
