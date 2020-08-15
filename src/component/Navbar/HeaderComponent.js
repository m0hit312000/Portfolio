import React,{ Component } from  'react';
import { MenuItem } from './MenuItem';

class Header extends Component
{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
           <div className = "Nav">
              <nav className="NavbarItems">
                 <h1 className="NavbarLogo">Portfolio</h1>
                 <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i> 
                 </div>
                 <ul className={this.state.clicked ? 'nav-menu-active':'nav-menu'}>
                    {MenuItem.map((item,index) => {
                        return (
                           <li key={index}>
                             <a className={item.cName} href={item.url}> 
                               {item.title}
                             </a>
                           </li>
                        );
                    })} 
                 </ul> 
              </nav>
           </div>
        );
    }
}

export default Header;