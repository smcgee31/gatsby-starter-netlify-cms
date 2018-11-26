import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Clone Site -- White Dental" />
    <Header />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
