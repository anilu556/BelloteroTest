import React from 'react';

import logo1 from '../img/logo-1.png';
import logo2 from '../img/logo-2.png';
import logo3 from '../img/logo-3.png';
import logo4 from '../img/logo-4.png';
import logo5 from '../img/logo-5.png';
import logo6 from '../img/logo-6.png';

class LogoStrip extends React.Component{
	render() {
    return(
		<div className='logoStrip'>
			<div className='logoStrip__lArea'>
				<img src={logo1} alt='logo-1'></img>
				<img src={logo2} alt='logo-2'></img>
				<img src={logo3} alt='logo-3'></img>
				<img src={logo4} alt='logo-4'></img>
				<img src={logo5} alt='logo-5'></img>
				<img src={logo6} alt='logo-6'></img>
			</div>
		</div>
    );
  }
}

export default LogoStrip;