import React from 'react'
import Link from 'gatsby-link'

const ListLink = (props) => (
  <a className="level-item nav-link"> 
    <Link exact to={ props.to } activeStyle={{ color: 'teal' }}>{ props.children }</Link>
  </a>
)

const Navbar = () => (
  <nav className="level nav-bar">
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about">About Us</ListLink>
    <ListLink to="/services">Dental Services</ListLink>
    <ListLink to="/patients">Patients</ListLink>
    <ListLink to="/blog">Blog</ListLink>
    <ListLink to="/contact">Contact Us</ListLink>
  </nav>
)

export default Navbar
