import React from 'react';
import './NavCss.css';
import {Link} from 'react-router-dom';

function NavBar(){
return(
    
    <nav className=" nav nav-items">
        <div><Link className='anchor' to='/'>logo</Link></div>
        <div>
        <ul className="ul-items">
            <li><Link className='anchor' to='/'>Home</Link></li>
            <li><Link className='anchor' to='/product'>Product</Link></li>
            <li><Link className='anchor' to='/admin'>Admin</Link></li>
        </ul>
        </div>
    </nav>
    
);
}
export default NavBar;