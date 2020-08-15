import React,{ Component } from  'react';
import About from '../AboutMeComponent';
import Project from '../ProjectComponent';
import Contact from '../ContactMe';

function RenderLandingPage(){
    return(
        <div>
          <div className="triangle_right">
          </div>
          <div className="profile_pic"></div>
        </div>
    );
}

class Home extends Component
{
    render(){
        return(
           <div className="Main">
               <div className="landing_page">
                   <RenderLandingPage />
               </div>
               <div className="about" id="about">
                  <About />
               </div>
               <div className="project" id="project">
                  <Project />
               </div>
               <div className="contact" id="contact">
                  <Contact />
               </div>
           </div>
        );
    }
}

export default Home;