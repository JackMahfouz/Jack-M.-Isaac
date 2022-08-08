import React, { Component } from "react";
import Card from "../components/card";
import image from '../resources/images/me.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import convnet from '../resources/images/ConvNet.gif'
import churn from '../resources/images/Churn.jpeg'
import perceptron from '../resources/images/perceptron.jpeg'
import todo from '../resources/images/todo.jpeg'
import AGI from '../resources/images/AGI.jpeg'
class Projects extends Component {
    skills = [{
        id:1,
        src: convnet,
        title: 'image classifier',
        content: 'a convNet trained on cifar10 dataset',
        navto: 'https://github.com/JackMahfouz/ANNs/tree/main/cifarClassifier',
        navtotitle: 'see project'

    },
    {   id:2,
        src: churn,
        title: 'Churn Modelling',
        content: 'a solution to a problem from kaggel',
        navto: 'https://github.com/JackMahfouz/ANNs/tree/main/churn',
        navtotitle: 'see solution'

        },
        {   id:3,
            src: perceptron,
            title: 'The Perceptron',
            content: 'An Algorithm that was introduced by Rosenblatt as the first prototype of a neuron',
            navto: 'https://github.com/JackMahfouz/the-perceptron-implementation',
            navtotitle: 'see impelementation'
    
        },
        {
            id:4,
            src: todo,
            title: 'TODO',
            content: 'a simple es6 project',
            navto: 'https://jackmahfouz.github.io/TODO/',
            navtotitle: 'visit the site'
    
        },
        {
            id:5,
            src: AGI,
            title: 'AI Main Repo',
            content: 'under development AGI projects',
            navto: 'https://github.com/JackMahfouz/AI-main-repo',
            navtotitle: 'see repo'
    
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
 
export default Projects;
