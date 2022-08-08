import React,  {Component} from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './contact.css'
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container1">
        <div className="card1">
        <ul className="contacts">
            <li><Link to=""><FaFacebook/> Facebook</Link></li>
            <li><Link to=""><FaGithub/> GitHub</Link></li>
            <li><Link to=""><FaWhatsapp/> Whatsapp</Link></li>
            <li><Link to=""><FaLinkedin/> LinkedIn</Link></li>
        </ul>
    </div>
</div>
        );
    }
}
 
export default Contact;