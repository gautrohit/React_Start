import React from 'react';

class StudentSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'BMW',
      model: 2019
    };
  }

  handleClick = () => {
    // with objects
    this.setState({
      brand: 'Maruti',
      model: 2020
    });

    //with function in setState
    // this.setState((state, props) => {
    //   console.log(state.brand);
    // });
  };

  render() {
    return (
      <div>
        <h1>setSet Button Click change **</h1>
        <h3>
          My Car Brand :{this.state.brand} and model {this.state.model}
        </h3>
        <button onClick={this.handleClick}>!!Click to change!!</button>
      </div>
    );
  }
}
export default StudentSet;
