import React from 'react';
import PropTypes from 'prop-types';

class Cls extends React.Component {
  render() {
    return (
      <>
        <h3>Hello here is Class Component!! {this.props.children}</h3>
        <h3>PropTypes example:- {this.props.age}</h3>
      </>
    );
  }
}

Cls.propTypes = {
  age: PropTypes.number
};

export default Cls;
