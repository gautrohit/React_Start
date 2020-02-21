import React from 'react'

  const UpdatedCounter = OriginalComponent => {

    class NewComponent extends React.Component{
        constructor(props){
            super(props);
                this.state={
                    count:0
                }
         }
    
        handleClick=()=>{
            //alert("this is HOC");
            this.setState({
                count: this.state.count + 6
            })
        }
    
    render(){
        return(
            <>
                <OriginalComponent count={this.state.count} handleClick={this.handleClick}></OriginalComponent>
            </>
        )
        }
       
}
return NewComponent
}

export default UpdatedCounter
