
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavHome,
  NavLogo
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLogo to='/' >CSCE 4430</NavLogo>
        <NavMenu>
            <NavHome to='/' activeStyle>
                Home
            </NavHome>
            <NavBtnLink to='/about' activeStyle>
                About
            </NavBtnLink>
            <NavBtnLink to='/help' activeStyle>
                Help
            </NavBtnLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;