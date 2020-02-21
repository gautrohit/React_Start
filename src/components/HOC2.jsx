import React, { Component } from 'react'
import UpdatedCounter from './withCounter';

 class HOC2 extends Component {
    
    render() {
        const {count, handleClick} = this.props;
        return (
            <div>
                <button onMouseOver={handleClick}>Mouse Over {count}</button>
            </div>
        )
    }
}

export default UpdatedCounter(HOC2);
