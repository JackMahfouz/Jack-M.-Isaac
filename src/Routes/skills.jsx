import React, { Component } from "react";
import Card from "../components/card";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import webdev from '../resources/images/webdev.jpeg'
import da from '../resources/images/da.jpeg'
import db from '../resources/images/db.jpeg'
import pm from '../resources/images/PM.jpeg'
import ANN from '../resources/images/ANN.jpeg'
class Skills extends Component {
    skills = [{
        id:1,
        src: ANN,
        title: 'AI & Ml & DL',
        content: 'I love to build DL models, also built a powerfull ML models',
        navto: 'https://github.com/JackMahfouz',
        navtotitle: 'see my github'

    },
    {   id:2,
        src: webdev,
        title: 'Web Development',
        content: 'I have a very good experience as front-end dev, also good with back-end',
        navto: 'https://github.com/JackMahfouz',
        navtotitle: 'see my github'

        },
        {   id:3,
            src: da,
            title: 'Data Analitics',
            content: 'As an AI researcher a relly have a good knowledge of Data analitics',
            navto: 'https://github.com/JackMahfouz',
            navtotitle: 'see my github'
    
        },
        {
            id:4,
            src: db,
            title: 'Data Base',
            content: 'my beloved science',
            navto: 'https://github.com/JackMahfouz',
            navtotitle: 'see my github'
    
        },
        {
            id:5,
            src: pm,
            title: 'Project Management',
            content: 'I managed many course projects',
            navto: 'https://github.com/JackMahfouz',
            navtotitle: 'see my github'
    
        }];
    render() { 
        return (
            <div className="container row pl-1 pt-4" style={{margin:"0 auto"}}>
                {
                    
                    this.skills.map(skill => <Card key={skill.id} {...skill} className="col-1 mb-5 pt-2"/>)
                }
            </div>
        );
    }
}
 
export default Skills;
