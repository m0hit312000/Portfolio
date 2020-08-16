import React,{ Component } from  'react';
import About from '../AboutMeComponent';
import Project from '../ProjectComponent';
import Contact from '../ContactMe';

function RenderLandingPage(){
    return(
        <div>
          <div className="triangle_right"></div>
          <div className="profile_pic"></div>
          <div className="name_head">
             <h1><i className="fa fa-quote-left" aria-hidden="true"></i> Hi, I'm <el className = "emphasis">Mohit</el> Mishra</h1>
             <h2>Front-end Developer,</h2>
             <h2>love to make what you think</h2>
             <a href="linkedin.com/in/mohit-mishra-820b14193"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
             <a href="https://github.com/m0hit312000"><i className="fa fa-github-square" aria-hidden="true"></i></a>
             <a href="mailto:mm8085574989@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          </div>
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