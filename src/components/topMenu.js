import React from 'react';

import logo from '../img/bellotero-logo.png';

class TopMenu extends React.Component {
	render() {
		return(
			<div className='topMenu'>
	  			<img src={logo} alt='Logo'
				className="topMenu__logo"></img>
	      		<div className='topMenu__navBar'>
		      		<ul className='topMenu__list medium'>
		      			<li className='topMenu__menuItem'>Features</li>
		      			<li className='topMenu__menuItem'>Solutions</li>
		      			<li className='topMenu__menuItem'>Stories</li>
		      			<li className='topMenu__menuItem'>Partners</li>
		      			<li className='topMenu__menuItem'>About</li>
		      			<li className='topMenu__menuItem'>Blog</li>
		      			<li className='topMenu__request'>Request a demo</li>
		      			<li className='topMenu__log'>Log In</li>
		      		</ul>
	      		</div>
	      	</div>
      	);
	}
}

export default TopMenu;