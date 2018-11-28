import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavbarAuth />
  </nav>
);

const NavbarAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
    <li>
      <NavLink to="/recipe/add">Add Recipe</NavLink>
    </li>
    <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
    <li>
      <button>Singout</button>
    </li>
  </ul>
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