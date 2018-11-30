import React from 'react';
import '../style/header.scss';
import logo from "../images/logo.png"; // Tell Webpack this JS file uses this image
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



  export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
    <>
    <div id="overlay" onClick={closeNav}></div>
    <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="ml-5 mr-4 faded">
            <h2 className="teko">CROSSFIT DELIVERANCE <span className="ml-2"><img src={logo} width="30px;" alt="" /></span></h2>
            <br/>
            <br/>
            <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad, repellat obcaecati dicta omnis voluptate. Cupiditate, alias.</p>
            <br/>
            <span><i className="fa fa-phone mr-2 my-2"></i> 253.686.4898</span>
                  <br/>
                  <span><i className="fa fa-map-marker mr-2 my-2"></i> 4535 Union Bay Pl NE </span>
                  <br/>
                  <span><i className="fa fa-clock-o  mr-2 my-2"></i> Mon - Fri 5:00am - 7:30pm</span>
            <br/>
            <hr/>
            <br/>
            <h4 className="teko">FOLLOW US</h4>
            <i className="fa fa-facebook mr-4 d-inline"></i>
            <i className="fa fa-youtube mr-4 d-inline"></i>
            <i className="fa fa-instagram mr-2 d-inline"></i>
        </div>
    </div>
    <div id="main">
    <Navbar  light expand="md" className="container">
          <NavbarBrand><img src={logo} className="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link  className="navitem" to="/" style={{color: `${this.props.color}`}}>HOME</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="navitem" style={{color: `${this.props.color}`}}>
                  PROGRAMS
                </DropdownToggle>
                <DropdownMenu right>
                    <Link className="navitem ml-3" to="/crossfit" style={{color: `black`}}>CROSSFIT</Link>
                    <br/>
                    <Link className="navitem ml-3" to="/training" style={{color: `black`}}>TRAINING</Link>
                    <br/>
                    <Link className="navitem ml-3" to="/nutrition" style={{color: `black`}}>NUTRITION</Link>
                    <br/>
                    <Link className="navitem ml-3" to="/seminars" style={{color: `black`}}>SEMINARS</Link>              
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink><Link className="navitem" to="/get_started" style={{color: `${this.props.color}`}}>GET STARTED</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="navitem" to="/coaches" style={{color: `${this.props.color}`}}>COACHES</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="navitem" to="/pricing" style={{color: `${this.props.color}`}}>PRICING</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="navitem" to="/blog" style={{color: `${this.props.color}`}}>BLOG</Link></NavLink>
              </NavItem>
              <NavItem onClick={openNav}>
                <NavLink><i className="fa fa-bars navitem mt-1" style={{color: `${this.props.color}`}}></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
          
      </>
    )
  }
}

window.addEventListener('scroll', function(e) {

  closeNav();
  
})

/* Set the width of the side navigation*/
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("overlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
} 


