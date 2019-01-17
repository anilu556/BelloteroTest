import React from 'react';

import compImg from '../img/hero-mockup.png';

class Digitize extends React.Component {
	render() {
		return(
			<div className='digitize'>
				<div className="digitize__left">
					<div className='digitize__left__text'>
						<div className=' medium'>
							Digitize your invoices 
							<div className='light'>
								and create your own shopping cart.
							</div>
						</div>
					</div>
					<div className='digitize__left__request'>
						<form action="">
							<input type="text" className='digitize__left__request__input regular' 
								id="fname" name="firstname" 
								placeholder="Your email address" />
							<input 
								className='digitize__left__request__button medium' 
								type="submit" 
								value="Request a Demo"
							/>
						</form>
					</div>
				</div>
				<div className='digitize__right'>
					<img className='digitize__right__img'src={compImg} alt="hero_mockup"></img>
				</div>
			</div>
      	);
	}
}

export default Digitize;