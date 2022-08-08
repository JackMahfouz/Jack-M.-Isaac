import React, { Component } from "react";
import Card from "../components/card";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import mit from '../resources/images/MIT.jpeg'
import xm  from '../resources/images/x-machina.jpeg'
class Dreams extends Component {
    skills = [{
        id:1,
        src: mit,
        title: 'Study at MIT',
        content: 'I realy want to study AI in MIT',
        navto: 'https://www.mit.edu/',
        navtotitle: 'visit MIT website'

    },
    {   id:2,
        src: xm,
        title: 'create a self-learning agent',
        content: 'a self learning agent that understands human emotions and behavior and acts the same as a human',
        navto: 'https://www.researchgate.net/publication/220231441_Self-learning_Agents_a_Connectionist_Theory_of_Emotion_Based_on_Crossbar_Value_Judgment',
        navtotitle: 'read more'

        }
        ];
    render() { 
        return (
            <div className="container row pl-1 pt-4" style={{margin:"0 auto"}}>
                {
                    
                    this.skills.map(skill => {
                        const card = <Card key={skill.id} {...skill} className="col-1 mb-5 pt-2"/>
                        return card;
                    })
                }
            </div>
        );
    }
}
 
export default Dreams;
