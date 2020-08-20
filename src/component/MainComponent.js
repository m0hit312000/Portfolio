import React,{ Component } from 'react';
import Home from './Home/HomeComponent';
import Header from './Navbar/HeaderComponent';
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
           </div>
        );
    }
}

export default Main;