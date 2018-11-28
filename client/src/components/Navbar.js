import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavbarUnAuth />
  </nav>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/search" exact>Search</NavLink>
    </li>
    <li>
      <NavLink to="/signin" exact>Signin</NavLink>
    </li>
    <li>
    <NavLink to="/signup" exact>Signup</NavLink>
    </li>
  </ul>
);

export default Navbar;