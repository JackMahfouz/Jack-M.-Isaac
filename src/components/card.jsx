import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Redirector from './redirector';
class Card extends Component {
    render() { 
        return (
            
            <div className={`card text-info ${this.props.className} container shadow`}  style={{ width: "16rem", background:"#1c2237"}}>
             <img src={this.props.src} className="card-img-top rounded h-75" alt="..."/>
             <div className="card-body">
                    <h5 className="card-title">{ this.props.title}</h5>
                    <p className="card-text">{ this.props.content}</p>
                    <Redirector to={this.props.navto} className="btn btn-primary shadow" target='_blank'>{ this.props.navtotitle}</Redirector>
             </div>
            </div> 
        );
    }
}
 
export default Card;