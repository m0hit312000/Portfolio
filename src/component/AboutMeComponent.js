import React,{ Component } from  'react';

class About extends Component
{
    render(){
        return(
          <div>  
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-content">
                <div className="about-main">
                    <p>
                      Hey, My name is Mohit Mishra, and i am a front-end developer currently living in Indore and pursuing my B.Tech CSE, so ya i have been coding for more than
                      a year now and looking to learn more every day and trying to progress and learn each day with new tasks.
                    </p>
                    <p>
                       So, I started my journey as a coder with HTML, CSS and started looking for more things and learnt JS, thereafter i 
                       started learning front-end framework Bootstrap and recently learned ReactJS+Redux and enjoyed a lot and currently
                       learning Backend with Express, Mongoose and MongoDB, Said much but ya just love learning and seeing the progress. 
                       Between all these other things which i love and learn are BlockChain development and Music, they sought of inspires me a lot.   
                    </p>
                    <p>
                       Currently i am looking for freelancing opportunities considering growth towards a professional and
                       personal me, and aiming towards the bigger challenges. So one contact me for the same and all the 
                       ways to connect to me are mentioned in the page. 
                    </p>
                </div>    
            </div>
          </div> 
        );
    }
}

export default About;