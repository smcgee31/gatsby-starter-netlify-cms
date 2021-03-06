import React from 'react'
import { Link } from 'gatsby'

const ListLink = (props) => (
  <p className="level-item nav-link"> 
    <Link exact to={ props.to } activeStyle={{ color: 'teal' }}>{ props.children }</Link>
  </p>
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




// import React from 'react'
// import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

// const Navbar = () => (
//   <nav className="navbar is-transparent">
//     <div className="container">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-item">
//           <figure className="image">
//             <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
//           </figure>
//         </Link>
//       </div>
//       <div className="navbar-start">
//         <Link className="navbar-item" to="/about">
//           About
//         </Link>
//         <Link className="navbar-item" to="/products">
//           Products
//         </Link>
//         <Link className="navbar-item" to="/contact">
//           Contact
//         </Link>
//         <Link className="navbar-item" to="/contact/examples">
//           Form Examples
//         </Link>
//       </div>
//       <div className="navbar-end">
//         <a
//           className="navbar-item"
//           href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className="icon">
//             <img src={github} alt="Github" />
//           </span>
//         </a>
//       </div>
//     </div>
//   </nav>
// )

// export default Navbar
