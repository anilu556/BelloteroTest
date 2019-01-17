import React from 'react';

class GetStarted extends React.Component {
	render() {
		return(
			<div className='getStarted'>
				<div className='getStarted__left light'>
					Ready to get started with Bellotero<span className='getStarted__left__special'>.io</span>?
				</div>
				<div className='getStarted__right'>
					<div className='getStarted__right__top light'>
						No more manual data entry. Hands off. Thumbs up.
					</div>
					<div className='getStarted__right__bottom'>
						<form action="">
							<input type="text" className='getStarted__right__bottom__input regular' 
								id="fname" name="firstname" 
								placeholder="Your email address" />
							<input 
								className='getStarted__right__bottom__button medium' 
								type="submit" 
								value="Request a Demo"
							/>
						</form>
					</div>
				</div>
			</div>
      	);
	}
}

export default GetStarted;