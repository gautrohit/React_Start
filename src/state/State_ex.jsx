import React from 'react';

class Student extends React.Component {
  state = {
    name: 'Raju',
    age: '56',
    gender: this.props.gender
  };

  render() {
    return (
      <h2>
        Hello this {this.state.name} and my age {this.state.age} my is gender is{' '}
        {this.state.gender}
      </h2>
    );
  }
}

export default Student;
