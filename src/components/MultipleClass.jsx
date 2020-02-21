import React from 'react';

class Monday extends React.Component{

    constructor(props){
        super(props);

        this.state={
            date:10,
            day:"monday",
            time: this.props.time
        }
    }


    handleClick = () =>{
        alert("Hello Event is working");
        this.setState({
            date:5,
            day:"Sunday",
            time: "7:30"
        })
    }

    render(){
        return(
            <>
            <h1>Hello day:{this.state.date}  day:{this.state.day} and time is=> {this.state.time} </h1>
            <button onClick={this.handleClick}>Event Button</button>
            </>
        );
    }
}

class Tuesday extends React.Component{
    constructor(props){
        super(props);

        this.state={
            date:11,
            day:"tuesday"
        }
    }
    render(){
        return(
            <>
         <h2>Hello day:{this.state.date},day: {this.state.day} </h2>
            </>
        );
    }
}


class Wednesday extends React.Component{
    render(){
        return(
            <>
            <h3>Hello Wednesday!!</h3>
            </>
        )
    }
}

function MultiComp(){
   return (
       <>
        <h3>Hello I_am_from_MultiComp</h3>
       </>
   );
}

export{
    Monday, Tuesday, Wednesday,MultiComp,
}

