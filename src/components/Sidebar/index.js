import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>CRÊPES</SidebarLink>
        <SidebarLink to='/'>SANDWICHS</SidebarLink>
        <SidebarLink to='/'>GAUFRES</SidebarLink>
        <SidebarLink to='/'>JUS NATURELS</SidebarLink>
        <SidebarLink to='/'>PETIT DEJEUNER</SidebarLink>
        <SidebarLink to='/'>AUTRES BOISSONS</SidebarLink>

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Contactez nous</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
