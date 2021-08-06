import React from 'react'
import { 
    Nav, 
    NavLink,
    Bars, 
    NavMenu }
    from './NavBarElements';

const NavBar = () =>{
    return (
        <>
             <Nav>
                <NavLink to="/">
                    <h1>Kobe S. Frimpong</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/work"activeStyle>
                        Work
                    </NavLink>
                    <NavLink to="/recess" activeStyle>
                        Recess
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    ); 
}

export default NavBar;