import React,{ Component } from 'react';
import Home from './Home/HomeComponent';
import Header from './Navbar/HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component
{
    render(){
        return(
           <div className="container">
             <Header />
               <Switch>
                   <Route path="/" component={Home} />
                   <Redirect to="/" />
               </Switch>
             <Footer /> 
           </div>
        );
    }
}

export default Main;