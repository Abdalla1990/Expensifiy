import React from 'react';
import {Link , NavLink} from 'react-router-dom'


// navLink is a library of react-router and it gives the ability to navigate through the app without refreshing or returning http requests to the server 
const Header = ()=>(
    
    
    <header>

    <h1>Expensify</h1>
    <NavLink  activeClassName="is-active" to="/" exact={true}>HOME </NavLink>

    <NavLink   activeClassName="is-active" to="/help">Help  </NavLink>

    <NavLink   activeClassName="is-active" to="/edit">Edit Expencies  </NavLink>

    <NavLink    activeClassName="is-active" to="/create">Create Expencies  </NavLink>

    </header>);

    export default Header ;