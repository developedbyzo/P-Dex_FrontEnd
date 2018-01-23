import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'

class Header extends Component {
  render () {
    return (
      <Navbar brand='P-Dex' right>
        <NavItem href='alonzomoses.com'>About the Developer</NavItem>
      </Navbar>
    )
  }
}

export default Header
