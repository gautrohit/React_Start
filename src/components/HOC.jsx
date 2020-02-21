import React, { Component } from 'react';
import UpdatedCounter from './withCounter';

 class HOC extends Component {
     
    render() {
        const {count, handleClick} = this.props;
        return (
            <div>
                <button onClick={handleClick}>HOC {count}</button>
            </div>
        )
    }
}

export default UpdatedCounter(HOC);
