import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Navbar brand='P-Dex' right>
          <NavItem>
            <a href='http://alonzomoses.com'>About the Developer</a>
          </NavItem>
        </Navbar>
    )
  }
}

export default Header
