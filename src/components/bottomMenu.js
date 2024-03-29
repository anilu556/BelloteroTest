import React from 'react';

import Footer from './footer';
import whiteLogo from '../img/bellotero-logo-white.png';
import appStore from '../img/app-store.png';
import googlePlay from '../img/google-play.png';

class BottomMenu extends React.Component {
	render() {
		return(
			<div className='bottomMenu'>
				<div className='bottomMenu__links'>
					<div className='bottomMenu__logo'>
						<img className='bottomMenu__logo__img' src={whiteLogo} alt="logo-white"></img>
					</div>
					<div className='bottomMenu__main'>
						<div className='bottomMenu__title medium'>
							Bellotero.io
						</div>
						<ul className='bottomMenu__list medium'>
			      			<li className='bottomMenu__menuItem'>Features</li>
			      			<li className='bottomMenu__menuItem'>Solutions</li>
			      			<li className='bottomMenu__menuItem'>Stories</li>
			      			<li className='bottomMenu__menuItem'>Partners</li>
			      			<li className='bottomMenu__menuItem'>About</li>
			      			<li className='bottomMenu__menuItem'>Blog</li>
		      			</ul>
					</div>
					<div className='bottomMenu__social'>
						<div className='bottomMenu__title medium'>
							Social
						</div>
						<ul className='bottomMenu__list medium'>
			      			<a href="https://www.facebook.com/SpiderManUnNuevoUniverso/" target="_blank">
			      				<li className='bottomMenu__menuItem'>Facebook</li>
			      			</a>
			      			<a href="https://twitter.com/crowsx3" target="_blank">
			      				<li className='bottomMenu__menuItem'>Twitter</li>
			      			</a>
			      			<a href="https://www.linkedin.com/in/heberto-moreno-márquez-9269918a" target="_blank">
			      				<li className='bottomMenu__menuItem'>LinkedIn</li>
			      			</a>
			      			<a href="https://www.instagram.com/chrislejarazu/" target="_blank">
			      				<li className='bottomMenu__menuItem'>Instagram</li>
			      			</a>
		      			</ul>
					</div>
					<div className='bottomMenu__support'>
						<div className='bottomMenu__title medium'>
							Social
						</div>
						<ul className='bottomMenu__list medium'>
			      			<li className='bottomMenu__menuItem'>support@bellotero.com</li>
			      			<li className='bottomMenu__menuItem'>(555) 555-5555</li>
			      			<li className='bottomMenu__menuItem'>Chat now</li>
			      			<li>
			      				<img className='bottomMenu__img' src={appStore} alt="logo-white"></img>
			      			</li>
			      			<li>
			      				<img className='bottomMenu__img' src={googlePlay} alt="logo-white"></img>
			      			</li>
		      			</ul>
					</div>
				</div>
				<Footer />
			</div>
      	);
	}
}

export default BottomMenu;