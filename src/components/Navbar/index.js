import React, {useState, useEffect} from 'react';
import styled , {css} from 'styled-components';
import {  NavLink, NavIcon, Bars } from './NavbarElements';

export const Nav = styled.nav`
 height:60px;
display: flex;
justify-content:space-between; 
padding: 1rem 2rem;
z-index:100;
position: fixed;
width:100%;
${props => props.defil && css`
background-color:transparent;`};
background: ${({navbar}) =>(navbar? '#282861': 'transparent')} ;

`;

const Navbar = ({ toggle }) => {

  const [navbar, setNavbar]= useState(false);

  const changeBackground = ()=> {
      if (window.scrollY >= 80) {
          setNavbar(true);

      }else{
          setNavbar(false);
      }
       
  };
  useEffect(() =>{
      window.addEventListener('scroll', changeBackground);
  });
  return (
    <>
      <Nav navbar={navbar}>
        <NavLink to='/'>Juicy fan's</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
