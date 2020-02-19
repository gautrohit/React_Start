import React from 'react';

class StudentSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'BMW',
      model: 2019,
      age: this.props.age,
      count: 0
    };
  }

  handleClick = () => {
    // with objects
    this.setState({
      brand: 'Maruti',
      model: 2020,
      age:20,
      count: this.state.count + 1
    });
  };
  
    handleClick2 = () => {
      // with objects
      this.setState({
        count: this.state.count + 1
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
          My Car Brand :{this.state.brand} and model {this.state.model} and {this.state.age} and Counter {this.state.count}
        </h3>
        <button onClick={this.handleClick}>!!Click to change!!</button>
        <button onMouseOver={this.handleClick2}>!!Click to change!!</button>
      </div>
    );
  }
}
export default StudentSet;
