import React,{ Component } from  'react';
import project from './project';
import img from '../../assets/img/pro1.jpg';
import './project.scss';
import './project.css';

function Card({property}){
    return(
          <div id={`card-${property.index}`} className="card">
              <img src={img} alt={property.index}/>
          </div>
    );
}

class Project extends Component
{
    constructor(props){
        super(props);
        this.state = {
           properties: project.properties,
           property: project.properties[0]
        }   
    }

    nextProperty(){
       const newIndex = this.state.property.index+1;    
       this.setState({
           property: project.properties[newIndex]
       })
    }

    previousProperty(){
       const newIndex = this.state.property.index-1;    
       this.setState({
         property: project.properties[newIndex]
       }) 
    }

    render(){
        const {properties,property} = this.state;
        return(
           <div>
              <div className="project-heading">
                 <h1>Projects</h1>
              </div> 
              <div className="project-content">
                 <div className="card-area">
                     <div className="buttons">
                        <button className="next" onClick={() => this.nextProperty()} disabled={property.index === project.properties.length-1}>Next</button>
                        <button className="previous" onClick={() => this.previousProperty()} disabled={property.index === 0}>Prev</button>
                     </div>
                     
                     <div className={`card-carousel active-card-${property.index}`}>
                        <div className="card-wrapper" style={{
                           "transform": `translate(-${property.index*(100/properties.length)}%)`
                        }}>
                           {
                              properties.map(property => <Card key={property.id} property={property}/>)
                           }
                        </div>
                     </div>
                 </div>     
              </div>
           </div> 
        );
    }
}

export default Project;