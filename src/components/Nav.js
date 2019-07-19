import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="main-nav">
          <ul>
            <li><NavLink to='/dogs' onClick={()=>props.onSearch("dogs")}>Dogs</NavLink></li>
            <li><NavLink to='/cats'onClick={()=>props.onSearch("cats")}>Cats</NavLink></li>
            <li><NavLink to='/computers'onClick={()=>props.onSearch("computers")}>Computers</NavLink></li>
          </ul>
        </nav>
    );
}

export default Nav;