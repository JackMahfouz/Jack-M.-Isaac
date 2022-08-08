import React, { Component } from 'react';

class Redirector extends Component {
    handelClick = ()=> {
        window.open(this.props.to, this.props.target)
    }
    
    render() { 
        return (
                <div onClick={()=>this.handelClick()} className={this.props.className}>
                {
                    this.props.children
                }
                    </div>
        );
    }
}
 
export default Redirector;