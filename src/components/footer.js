import React from 'react';

class Footer extends React.Component {
	render() {
		return(
			<div className='footer regular'>
				<div className='footer__container regular'>
					<div className='footer__copy'>
						© 1909 Bellotero.io
					</div>
					<div className='footer__right'>
						<div className='footer__privacy'>
							Privacy Policy
						</div>
						<div className='footer__privacy'>
							Terms of Service
						</div>
					</div>
				</div>
			</div>
      	);
	}
}

export default Footer;