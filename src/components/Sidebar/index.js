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
        <SidebarLink to='/crêpes-gaufres'>CRÊPES ET GAUFRES</SidebarLink>
        <SidebarLink to='/sandwichs'>SANDWICHS</SidebarLink>
        <SidebarLink to='/jus naturels-et-autres boissons'>JUS NATURELS ET AUTRES BOISSONS</SidebarLink>
        <SidebarLink to='/petit-dejeuner'>PETIT DEJEUNER</SidebarLink>
       

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Contactez nous</SidebarRoute>
        
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
