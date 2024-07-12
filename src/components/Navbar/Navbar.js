
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
   background: linear-gradient(45deg, #4CAF50, #2196F3);
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  & > svg {
    margin-right: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MySite</Logo>
      <NavLinks>
        <NavLink to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
        <NavLink to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
        <NavLink to="/blog"><FontAwesomeIcon icon={faInfoCircle} /> Blog</NavLink>
        <NavLink to="/services"><FontAwesomeIcon icon={faCogs} /> Services</NavLink>
        <NavLink to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
