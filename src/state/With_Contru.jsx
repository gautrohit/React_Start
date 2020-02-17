import React from 'react';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sita',
      age: 45,
      gender: this.props.gender
    };
  }
  render() {
    return (
      <>
        <h2>
          Hello my name is {this.state.name}, age is {this.state.age} and gender
          is {this.state.gender}
        </h2>
      </>
    );
  }
}
export default Employee;
