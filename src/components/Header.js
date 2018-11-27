import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import { FaCalendarCheck } from 'react-icons/fa'

const Header = () => (
  <header className="header">
    <div className="level">
      <div className="level-left">
        <div className="header-logo-box">
          <Link to="/" className="level-item" title="">
            <figure>
              <img src={logo} alt="White Family Dental logo"/>
            </figure>
          </Link>
        </div>
      </div>
      <nav className="level-right header-action-menu">
        <Link to="tel:(385) 269-0550" className="headerPhone">
          <p className="level-item">(385) 269-0550</p>
        </Link>
        <Link to="/make-an-appointment" className="button is-link" title="Request Appointment">
          <p className="level-item"><FaCalendarCheck className="font-plus icon-space-right" />Appointments</p>
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
