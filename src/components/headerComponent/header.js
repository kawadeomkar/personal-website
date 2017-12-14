import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      	<div className='logo'>
      	</div>

      	<nav>
      		<ul>
      			<li className="first">
      			   <Link to="/"></Link>
      			</li>
      			<li>
              <Link to="/About"></Link>
      			</li>
      			<li>
              <Link to="/Projects"></Link>
      			</li>
      			<li className="last">
      			   <Link to="/Contacts"></Link>
      			</li>
      		</ul>
      	</nav>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/270939/heroBg-compressor.png"
        height="750" width="600" alt ="graphic art"></img>
      </header>
    );
  }
}

export default Header;
