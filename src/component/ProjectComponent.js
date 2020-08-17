import React,{ Component } from  'react';
import project from '../data/project';

function Card({property}){
    return(
       <div className="card-carousel">
          <div className="card">
              <img src={property.img} alt={property.index}/>
          </div>
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
                     <button className="next" onClick={() => this.nextProperty()} disabled={property.index === project.properties.length-1}>Next</button>
                     <button className="previous" onClick={() => this.previousProperty()} disabled={property.index === 0}>Prev</button>
                     <div className=".card-wrapper">
                     {
                        properties.map(property => <Card key={property.id} property={property}/>)
                     }
                     </div>
                 </div>     
              </div>
           </div>
        );
    }
}

export default Project;