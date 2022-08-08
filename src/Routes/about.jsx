import React, { Component } from "react";
import './about.css'
import image from '../resources/images/me.jpg'
import Redirector from "../components/redirector";
class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className="about_me">
            <img src={image} alt="me" className="meImg"/>
            <article className = "paras">
            <div className="meName">Jack M. Isaac</div>
            <div className="info">
                Hellow every one, I am Jack M. Isaac
                I study AI, I also love web development i have many more projects you can visit my<Redirector href="https://github.com/JackMahfouz" target="blank"> github</Redirector> 
            </div>
        </article>
    </div>
        );
    }
}
 
export default About;
